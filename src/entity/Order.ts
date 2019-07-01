import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { OrderItem } from './OrderItem';
import { User } from './User';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => User,
    user => user.order
  )
  user: User;

  @OneToMany(
    type => OrderItem,
    item => item.order
  )
  orderItems: OrderItem[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
