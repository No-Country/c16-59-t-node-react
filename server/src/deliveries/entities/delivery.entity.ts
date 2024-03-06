import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'deliveries' })
export class Delivery {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  type: string[];

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
  })
  image: string;
}
