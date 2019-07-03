import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinTable
} from 'typeorm';
import { Order } from './Order';
import { Product } from './Product';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(
    type => Product,
  )
  @JoinTable()
  product: Product;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(
    type => Order,
    order => order.orderItems
  )
  order: Order;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}