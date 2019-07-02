import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';
import { User } from './User';

@Entity()
export class Cashback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalValue: string;

  @Column()
  percentValue: string;

  @OneToOne(type => User)
  user: User;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
