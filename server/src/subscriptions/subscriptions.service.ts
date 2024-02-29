import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class SubscriptionsService {
  private readonly logger = new Logger('SubscritionsService');

  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createSubscriptionDto: CreateSubscriptionDto) {
    try {
      const subscription = createSubscriptionDto;

      const createSubscription =
        this.subscriptionRepository.create(subscription);

      await this.subscriptionRepository.save(createSubscription);

      return createSubscription;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll() {
    return await this.subscriptionRepository.find();
  }

  async findOne(id: string) {
    return await this.subscriptionRepository.findOneBy({ id });
  }

  async findType(type: string) {
    const subscription = await this.dataSource
      .getRepository(Subscription)
      .createQueryBuilder('subscription')
      .select([
        'subscription.type',
        'subscription.price',
        'subscription.id',
        'subscription.image',
        'subscription.quantityFruit',
        'subscription.quantityVegetable',
        'subscription.quantityProcessedFood',
      ])
      .where({ type: type })
      .getMany();

    return subscription;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }

  private handleDBExceptions(error: any) {
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
