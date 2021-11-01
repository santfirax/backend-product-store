import { Test, TestingModule } from '@nestjs/testing';
import { CupboardService } from './cupboard.service';

describe('CupboardService', () => {
  let service: CupboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CupboardService],
    }).compile();

    service = module.get<CupboardService>(CupboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
