import { Test, TestingModule } from '@nestjs/testing';
import { PocketsController } from './pockets.controller';
import { PocketsService } from './pockets.service';

describe('PocketsController', () => {
  let controller: PocketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PocketsController],
      providers: [PocketsService],
    }).compile();

    controller = module.get<PocketsController>(PocketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
