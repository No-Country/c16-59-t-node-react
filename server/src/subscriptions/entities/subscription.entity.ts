import { User } from 'src/auth/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(
    () => User,
    //Relacion
    (user) => user.subscription,
  )
  user: User;
}
//Creo el error es tener que borrar la base de datos
