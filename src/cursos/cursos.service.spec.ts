import { Test, TestingModule } from '@nestjs/testing';
import { CursosService } from './cursos.service';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

describe('CursosService', () => {
  let service: CursosService;
  let prisma: PrismaService;

  const mockCursos = [
    { id: 1, nombre: 'Curso 1', descripcion: 'Desc 1' },
    { id: 2, nombre: 'Curso 2', descripcion: 'Desc 2' },
  ];

  const mockLecciones = [
    { id: 1, nombre: 'Leccion 1', cursoId: 1 },
    { id: 2, nombre: 'Leccion 2', cursoId: 1 },
  ];

  const prismaMock = {
    curso: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
    },
    leccion: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CursosService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<CursosService>(CursosService);
    prisma = module.get<PrismaService>(PrismaService);

    // Resetear mocks antes de cada test
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all cursos', async () => {
      prismaMock.curso.findMany.mockResolvedValue(mockCursos);

      const result = await service.findAll();
      expect(result).toEqual(mockCursos);
      expect(prismaMock.curso.findMany).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException if no cursos found', async () => {
      prismaMock.curso.findMany.mockResolvedValue([]);

      await expect(service.findAll()).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('findLeccionesByCurso', () => {
    it('should return lecciones for a valid cursoId', async () => {
      prismaMock.curso.findUnique.mockResolvedValue(mockCursos[0]);
      prismaMock.leccion.findMany.mockResolvedValue(mockLecciones);

      const result = await service.findLeccionesByCurso(1);
      expect(result).toEqual(mockLecciones);
      expect(prismaMock.curso.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
      expect(prismaMock.leccion.findMany).toHaveBeenCalledWith({
        where: { cursoId: 1 },
      });
    });

    it('should throw NotFoundException if curso does not exist', async () => {
      prismaMock.curso.findUnique.mockResolvedValue(null);

      await expect(service.findLeccionesByCurso(999)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException if curso has no lecciones', async () => {
      prismaMock.curso.findUnique.mockResolvedValue(mockCursos[0]);
      prismaMock.leccion.findMany.mockResolvedValue([]);

      await expect(service.findLeccionesByCurso(1)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
