import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CommonModule } from './common/common.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { AuthModule } from './auth/auth.module';
import { DeliveriesModule } from './deliveries/deliveries.module';
import { PaymentsModule } from './payments/payments.module';
import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [
    //To stablish the enviroment variables
    ConfigModule.forRoot(),

    //DB Config:
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, // False in production
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),

    ProductsModule,

    CloudinaryModule,

    CommonModule,

    SubscriptionsModule,

    AuthModule,

    DeliveriesModule,

    PaymentsModule,

    ShoppingModule,
  ],
})
export class AppModule {}
