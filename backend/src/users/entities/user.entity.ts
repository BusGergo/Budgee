import { Transaction } from 'src/transactions/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn({ default: null })
  updatedAt: Date;

  @DeleteDateColumn({ default: null })
  deletedAt: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.user, {
    cascade: true,
  })
  transactions: Transaction[];
}
