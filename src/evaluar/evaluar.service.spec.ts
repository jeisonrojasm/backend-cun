import { Test, TestingModule } from '@nestjs/testing';
import { EvaluarService } from './evaluar.service';

describe('EvaluarService', () => {
  let service: EvaluarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluarService],
    }).compile();

    service = module.get<EvaluarService>(EvaluarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
