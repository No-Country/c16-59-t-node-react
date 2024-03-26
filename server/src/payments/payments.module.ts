import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService],
  imports: [ProductsModule],
})
export class PaymentsModule {}
