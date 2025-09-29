import { Test, TestingModule } from '@nestjs/testing';
import { LeccionesController } from './lecciones.controller';
import { LeccionesService } from './lecciones.service';
import { NotFoundException } from '@nestjs/common';

describe('LeccionesController', () => {
  let controller: LeccionesController;
  let service: LeccionesService;

  const mockLeccionesService = {
    findPreguntasByLeccion: jest.fn(),
  };

  const mockPreguntas = [
    { id: 1, enunciado: 'Pregunta 1', leccionId: 1 },
    { id: 2, enunciado: 'Pregunta 2', leccionId: 1 },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeccionesController],
      providers: [
        { provide: LeccionesService, useValue: mockLeccionesService },
      ],
    }).compile();

    controller = module.get<LeccionesController>(LeccionesController);
    service = module.get<LeccionesService>(LeccionesService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findPreguntasByLeccion', () => {
    it('should return preguntas for a valid leccionId', async () => {
      mockLeccionesService.findPreguntasByLeccion.mockResolvedValue(mockPreguntas);

      const result = await controller.findPreguntasByLeccion(1);

      expect(result).toEqual(mockPreguntas);
      expect(mockLeccionesService.findPreguntasByLeccion).toHaveBeenCalledWith(1);
    });

    it('should propagate NotFoundException from service', async () => {
      mockLeccionesService.findPreguntasByLeccion.mockRejectedValue(
        new NotFoundException('Lección no encontrada')
      );

      await expect(controller.findPreguntasByLeccion(999)).rejects.toThrow(
        NotFoundException
      );
      expect(mockLeccionesService.findPreguntasByLeccion).toHaveBeenCalledWith(999);
    });
  });
});
