import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...restUser } = createUserDto;

      const user = this.userRepository.create({
        ...restUser,
        password: await bcrypt.hash(password, 20),
      });

      await this.userRepository.save(user);
      console.log({ user: user });

      //Not return password
      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({ id: user.id, email: user.email }),
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { email: true, password: true, id: true },
    });

    if (!user) {
      throw new UnauthorizedException('Not valid credentials (email)');
    }

    if (!bcrypt.compare(password, user.password)) {
      throw new UnauthorizedException('Not valid credentials');
    }

    // if (password !== user.password) {
    //   throw new UnauthorizedException('Not valid credentials');
    // } else {
    //   bcrypt.compare(password, user.password);
    // }
    //delete user.password;

    return {
      ...user,
      token: this.getJwtToken({ id: user.id, email: user.email }),
    };
  }

  //Generate new token based on the token of login
  async checkAuthStatus(user: User) {
    return {
      ...user,
      token: this.getJwtToken({ id: user.id, email: user.email }),
    };
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id });
  }

  //Genera el JWT
  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);

    return token;
  }

  private handleDBExceptions(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }

    //Manejar otros errores
    this.logger.error(error);

    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
