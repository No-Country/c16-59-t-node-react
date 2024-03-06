import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Delivery } from './entities/delivery.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
  imports: [AuthModule, TypeOrmModule.forFeature([Delivery])],
  exports: [TypeOrmModule],
})
export class DeliveriesModule {}
