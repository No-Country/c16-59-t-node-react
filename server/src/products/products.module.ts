import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    AuthModule,
    CloudinaryModule,
    TypeOrmModule.forFeature([Product, ProductImage]),
  ],
  exports: [ProductsService, TypeOrmModule],
})
export class ProductsModule {}
