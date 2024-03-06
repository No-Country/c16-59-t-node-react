import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';

@Module({
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
  imports: [TypeOrmModule.forFeature([Delivery])],
  exports: [TypeOrmModule],
})
export class DeliveriesModule {}
