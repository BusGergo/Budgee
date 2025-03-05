import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  amount: number;

  @Column({ type: 'text', nullable: true })
  descriptions?: string;

  @Column({ type: 'enum', enum: ['income', 'expense'] })
  type: 'income' | 'expense';

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => User, (user) => user.transactions, { onDelete: 'CASCADE' })
  user: User;
}
