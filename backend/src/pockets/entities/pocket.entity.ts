import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';

@Entity()
export class Pocket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  balance: number;

  @ManyToOne(() => User, (user) => user.pockets, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => Transaction, (transaction) => transaction.pocket)
  transactions: Transaction[];
}
