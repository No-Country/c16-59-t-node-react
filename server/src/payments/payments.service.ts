import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  createCharge() {
    return this.stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'manzana',
            },
            unit_amount: 2500,
          },
          quantity: 2,
        },
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'pera',
            },
            unit_amount: 250,
          },
          quantity: 5,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4242/succes',
      cancel_url: 'http://localhost:4242/cancel',
    });
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
