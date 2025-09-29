import { Test, TestingModule } from '@nestjs/testing';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { NotFoundException } from '@nestjs/common';

describe('CursosController', () => {
  let controller: CursosController;
  let service: CursosService;

  const mockCursos = [
    { id: 1, nombre: 'Curso 1', descripcion: 'Desc 1' },
    { id: 2, nombre: 'Curso 2', descripcion: 'Desc 2' },
  ];

  const mockLecciones = [
    { id: 1, nombre: 'Leccion 1', cursoId: 1 },
    { id: 2, nombre: 'Leccion 2', cursoId: 1 },
  ];

  const cursosServiceMock = {
    findAll: jest.fn(),
    findLeccionesByCurso: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursosController],
      providers: [
        { provide: CursosService, useValue: cursosServiceMock },
      ],
    }).compile();

    controller = module.get<CursosController>(CursosController);
    service = module.get<CursosService>(CursosService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all cursos', async () => {
      cursosServiceMock.findAll.mockResolvedValue(mockCursos);

      const result = await controller.findAll();
      expect(result).toEqual(mockCursos);
      expect(cursosServiceMock.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException if service throws', async () => {
      cursosServiceMock.findAll.mockRejectedValue(
        new NotFoundException('No se encontraron cursos')
      );

      await expect(controller.findAll()).rejects.toThrow(NotFoundException);
    });
  });

  describe('findLeccionesByCurso', () => {
    it('should return lecciones for a valid cursoId', async () => {
      cursosServiceMock.findLeccionesByCurso.mockResolvedValue(mockLecciones);

      const result = await controller.findLeccionesByCurso(1);
      expect(result).toEqual(mockLecciones);
      expect(cursosServiceMock.findLeccionesByCurso).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException if service throws', async () => {
      cursosServiceMock.findLeccionesByCurso.mockRejectedValue(
        new NotFoundException('Curso no encontrado')
      );

      await expect(controller.findLeccionesByCurso(999)).rejects.toThrow(
        NotFoundException
      );
    });
  });
});
