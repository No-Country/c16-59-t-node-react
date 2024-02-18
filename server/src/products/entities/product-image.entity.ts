import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

export class ProductImage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'text',
  })
  url: string;

  @ManyToOne(
    () => Product,
    (product) => product.image,
    //To Delete a product with its imagages
    { onDelete: 'CASCADE' },
  )
  product: Product;
}
