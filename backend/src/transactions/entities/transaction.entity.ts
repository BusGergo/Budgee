import { Category } from 'src/categories/entities/category.entity';
import { Pocket } from 'src/pockets/entities/pocket.entity';
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

  @ManyToOne(() => Category, (category) => category.transactions, {
    nullable: false,
    onDelete: 'SET NULL',
  })
  category: Category;

  @ManyToOne(() => Pocket, (pocket) => pocket.transactions, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  pocket: Pocket;
}
