import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'subscriptions' })
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  type: string[];

  @Column({
    type: 'float',
  })
  price: number;

  @Column({
    type: 'text',
  })
  image?: string[];

  @Column({
    type: 'int',
  })
  quantityFruit: number;

  @Column({
    type: 'int',
  })
  quantityVegetable: number;

  @Column({
    type: 'int',
  })
  quantityProcessedFood: number;
}
