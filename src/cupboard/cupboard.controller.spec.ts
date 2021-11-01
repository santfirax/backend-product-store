import { Test, TestingModule } from '@nestjs/testing';
import { CupboardController } from './cupboard.controller';
import { CupboardService } from './cupboard.service';

describe('CupboardController', () => {
  let controller: CupboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CupboardController],
      providers: [CupboardService],
    }).compile();

    controller = module.get<CupboardController>(CupboardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
