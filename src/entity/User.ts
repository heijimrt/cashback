import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Length, IsNotEmpty } from 'class-validator';
import * as bcrypt from "bcryptjs";
import { Order } from './Order';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  surName: string;

  @Column({
    type: 'varchar',
    unique: true
  })
  email: string;

  @Column()
  @Length(4, 100)
  password: string;

  @Column({
    type: 'int',
    unique: true
  })
  document: number;

  @Column()
  @IsNotEmpty()
  role: string;

  @OneToMany(
    type => Order,
    order => order.user
  )
  order: Order[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  public hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  public checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}