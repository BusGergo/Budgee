import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { PocketsModule } from './pockets/pockets.module';
import { AuthModule } from './auth/auth.module';
import { ReportsModule } from './reports/reports.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ReportsModule } from './reports/reports.module';
import { PocketsModule } from './pockets/pockets.module';

@Module({
  imports: [UsersModule, TransactionsModule, PocketsModule, AuthModule, CategoriesModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
