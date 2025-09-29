import { Test, TestingModule } from '@nestjs/testing';
import { LeccionesService } from './lecciones.service';
import { PrismaService } from '../../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

describe('LeccionesService', () => {
  let service: LeccionesService;
  let prisma: PrismaService;

  const mockLeccion = { id: 1, nombre: 'Leccion 1', cursoId: 1 };
  const mockPreguntas = [
    { id: 1, enunciado: 'Pregunta 1', leccionId: 1 },
    { id: 2, enunciado: 'Pregunta 2', leccionId: 1 },
    { id: 3, enunciado: 'Pregunta 3', leccionId: 1 },
  ];

  const prismaMock = {
    leccion: { findUnique: jest.fn() },
    pregunta: { findMany: jest.fn() },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LeccionesService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<LeccionesService>(LeccionesService);
    prisma = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findPreguntasByLeccion', () => {
    it('should return preguntas in random order', async () => {
      prismaMock.leccion.findUnique.mockResolvedValue(mockLeccion);
      prismaMock.pregunta.findMany.mockResolvedValue(mockPreguntas);

      const result = await service.findPreguntasByLeccion(1);
      
      // Verifica que el resultado tenga todas las preguntas
      expect(result).toHaveLength(mockPreguntas.length);
      // Verifica que cada pregunta del mock esté en el resultado
      mockPreguntas.forEach(p => expect(result).toContainEqual(p));
      
      expect(prismaMock.leccion.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(prismaMock.pregunta.findMany).toHaveBeenCalledWith({
        where: { leccionId: 1 },
      });
    });

    it('should throw NotFoundException if leccion does not exist', async () => {
      prismaMock.leccion.findUnique.mockResolvedValue(null);

      await expect(service.findPreguntasByLeccion(999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException if leccion has no preguntas', async () => {
      prismaMock.leccion.findUnique.mockResolvedValue(mockLeccion);
      prismaMock.pregunta.findMany.mockResolvedValue([]);

      await expect(service.findPreguntasByLeccion(1)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
