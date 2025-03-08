import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.reports, { onDelete: 'CASCADE' })
  user: User;

  @Column()
  title: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalIncome: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalExpenses: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  netSavings: number;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @CreateDateColumn()
  generatedAt: Date;
}
