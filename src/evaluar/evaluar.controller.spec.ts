import { Test, TestingModule } from '@nestjs/testing';
import { EvaluarController } from './evaluar.controller';
import { EvaluarService } from './evaluar.service';
import { EvaluarDto } from './dto/evaluar.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('EvaluarController', () => {
  let controller: EvaluarController;
  let service: EvaluarService;

  const mockEvaluarService = {
    evaluar: jest.fn(),
  };

  const mockResponseCorrecta = {
    preguntaId: 1,
    enunciado: '¿Qué es NestJS?',
    respuestaEnviada: 'Framework',
    correcta: true,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluarController],
      providers: [
        { provide: EvaluarService, useValue: mockEvaluarService },
      ],
    }).compile();

    controller = module.get<EvaluarController>(EvaluarController);
    service = module.get<EvaluarService>(EvaluarService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('evaluar', () => {
    it('should return correct response when service returns correct', async () => {
      mockEvaluarService.evaluar.mockResolvedValue(mockResponseCorrecta);

      const dto: EvaluarDto = { preguntaId: 1, respuesta: 'Framework' };
      const result = await controller.evaluar(dto);

      expect(result).toEqual(mockResponseCorrecta);
      expect(mockEvaluarService.evaluar).toHaveBeenCalledWith(dto);
    });

    it('should propagate NotFoundException from service', async () => {
      mockEvaluarService.evaluar.mockRejectedValue(
        new NotFoundException('Pregunta no encontrada')
      );

      const dto: EvaluarDto = { preguntaId: 999, respuesta: 'Framework' };

      await expect(controller.evaluar(dto)).rejects.toThrow(NotFoundException);
      expect(mockEvaluarService.evaluar).toHaveBeenCalledWith(dto);
    });

    it('should propagate BadRequestException from service', async () => {
      mockEvaluarService.evaluar.mockRejectedValue(
        new BadRequestException('Respuesta inválida')
      );

      const dto: EvaluarDto = { preguntaId: 1, respuesta: 'Python' };

      await expect(controller.evaluar(dto)).rejects.toThrow(BadRequestException);
      expect(mockEvaluarService.evaluar).toHaveBeenCalledWith(dto);
    });
  });
});
