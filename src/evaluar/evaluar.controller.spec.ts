import { Test, TestingModule } from '@nestjs/testing';
import { EvaluarController } from './evaluar.controller';
import { EvaluarService } from './evaluar.service';

describe('EvaluarController', () => {
  let controller: EvaluarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluarController],
      providers: [EvaluarService],
    }).compile();

    controller = module.get<EvaluarController>(EvaluarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
