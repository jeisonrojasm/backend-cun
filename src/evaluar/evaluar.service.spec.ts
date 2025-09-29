import { Test, TestingModule } from '@nestjs/testing';
import { EvaluarService } from './evaluar.service';
import { PrismaService } from '../../prisma/prisma.service';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { EvaluarDto } from './dto/evaluar.dto';

describe('EvaluarService', () => {
  let service: EvaluarService;
  let prisma: PrismaService;

  const mockPregunta = {
    id: 1,
    enunciado: '¿Qué es NestJS?',
    opciones: ['ORM', 'Framework', 'Base de datos'],
    respuestaCorrecta: 'Framework',
  };

  const prismaMock = {
    pregunta: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EvaluarService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<EvaluarService>(EvaluarService);
    prisma = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('evaluar', () => {
    it('should return correct response when answer is correct', async () => {
      prismaMock.pregunta.findUnique.mockResolvedValue(mockPregunta);

      const dto: EvaluarDto = { preguntaId: 1, respuesta: 'Framework' };
      const result = await service.evaluar(dto);

      expect(result).toEqual({
        preguntaId: 1,
        enunciado: '¿Qué es NestJS?',
        respuestaEnviada: 'Framework',
        correcta: true,
      });
      expect(prismaMock.pregunta.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should return incorrect response when answer is incorrect', async () => {
      prismaMock.pregunta.findUnique.mockResolvedValue(mockPregunta);

      const dto: EvaluarDto = { preguntaId: 1, respuesta: 'ORM' };
      const result = await service.evaluar(dto);

      expect(result.correcta).toBe(false);
    });

    it('should throw NotFoundException if pregunta does not exist', async () => {
      prismaMock.pregunta.findUnique.mockResolvedValue(null);

      const dto: EvaluarDto = { preguntaId: 999, respuesta: 'Framework' };

      await expect(service.evaluar(dto)).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if respuesta is not in opciones', async () => {
      prismaMock.pregunta.findUnique.mockResolvedValue(mockPregunta);

      const dto: EvaluarDto = { preguntaId: 1, respuesta: 'Python' };

      await expect(service.evaluar(dto)).rejects.toThrow(BadRequestException);
    });
  });
});
