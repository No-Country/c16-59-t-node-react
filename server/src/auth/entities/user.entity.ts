import { Product } from 'src/products/entities/product.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    default:
      'https://res.cloudinary.com/dnautzk6f/image/upload/v1709329802/uaavlxx2awjgfhvreuqf.png',
  })
  photograph?: string;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'text',
  })
  lastName: string;

  @Column({
    type: 'text',
    unique: true,
  })
  @Index({
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
    //Para que no se muestre la columna en las relaciones
    select: false,
  })
  password: string;

  @Column({
    type: 'bool',
    default: true,
  })
  isActive: boolean;

  @Column({
    type: 'text',
    array: true,
    default: ['user'],
  })
  roles: string[];

  @Column({
    type: 'text',
  })
  phone: string;

  @Column({
    type: 'text',
  })
  identityType: string;

  @Column({
    type: 'int',
  })
  identityNumber: number;

  @Column({
    type: 'text',
    default: 'Colombia',
  })
  country: string;

  @Column({
    type: 'text',
  })
  city: string;

  @Column({
    type: 'text',
  })
  address: string;

  @Column({
    type: 'text',
  })
  district: string;

  @ManyToOne(
    () => Subscription,
    //Relacion
    (subscription) => subscription.user,
    { eager: true },
  )
  // @JoinColumn()
  subscription?: Subscription;

  @Column({
    type: 'float',
    default: 0,
  })
  balance: number;

  @OneToMany(
    //Table
    () => Product,
    (product) => product.user,
  )
  product: Product;

  @BeforeInsert()
  checkFieldsBeforeInsert() {
    //Para pasar a minusculas y quitar espacios en el email
    this.email = this.email.toLowerCase().trim();
  }

  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
