import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'product_images' })
export class ProductImage {
  @PrimaryGeneratedColumn()
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
