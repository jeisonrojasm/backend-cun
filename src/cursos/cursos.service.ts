import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const cursos = await this.prisma.curso.findMany();

    if (!cursos || cursos.length === 0) {
      throw new NotFoundException('No se encontraron cursos registrados');
    }

    return cursos;
  }

  async findLeccionesByCurso(cursoId: number) {
    // Verificar que el curso exista
    const curso = await this.prisma.curso.findUnique({
      where: { id: cursoId },
    });

    if (!curso) {
      throw new NotFoundException(
        `El curso con id ${cursoId} no existe en el sistema`,
      );
    }

    const lecciones = await this.prisma.leccion.findMany({
      where: { cursoId },
    });

    if (!lecciones || lecciones.length === 0) {
      throw new NotFoundException(
        `El curso con id ${cursoId} no tiene lecciones registradas`,
      );
    }

    return lecciones;
  }
}
