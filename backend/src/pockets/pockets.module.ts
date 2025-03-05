import { Module } from '@nestjs/common';
import { PocketsService } from './pockets.service';
import { PocketsController } from './pockets.controller';

@Module({
  controllers: [PocketsController],
  providers: [PocketsService],
})
export class PocketsModule {}
