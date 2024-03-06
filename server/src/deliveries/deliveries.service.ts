import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveriesService {
  private readonly logger = new Logger('DeliveryService');

  constructor(
    @InjectRepository(Delivery)
    private readonly deliveryRepository: Repository<Delivery>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    try {
      const delivery = createDeliveryDto;

      const createDelivery = this.deliveryRepository.create(delivery);

      await this.deliveryRepository.save(createDelivery);

      return createDelivery;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.deliveryRepository.find();
  }

  findOne(id: string) {
    return this.deliveryRepository.findOneBy({ id });
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  async remove(id: string) {
    const delivery = await this.findOne(id);

    return this.deliveryRepository.remove(delivery);
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
