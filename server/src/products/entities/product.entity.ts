import { BeforeInsert, BeforeUpdate, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImage } from './product-image.entity';

export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  name: string;

  @Column({
    type: 'float',
    nullable: false,
  })
  price: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'int',
    default: 0,
  })
  stock: number;

  @Column({
    type: 'text',
  })
  category: string[];

  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  image?: ProductImage[];

  @Column({
    type: 'text',
    unique: true,
  })
  slug: string;
}

@BeforeInsert()
checkSlugInsert() {
  if (!this.slug) {
    this.slug = this.title;
  }

  this.slug = this.slug
    .toLowerCase()
    .replaceAll(' ', '_')
    .replaceAll("'", '');
}

@BeforeUpdate()
checkSlugUpdate() {
  this.slug = this.slug
    .toLocaleLowerCase()
    .replace(' ', '_')
    .replaceAll("'", '');
}