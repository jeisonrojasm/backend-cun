import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LeccionesService {
  constructor(private prisma: PrismaService) {}

  async findPreguntasByLeccion(leccionId: number) {
    // Verificamos que la lección exista
    const leccion = await this.prisma.leccion.findUnique({
      where: { id: leccionId },
    });

    if (!leccion) {
      throw new NotFoundException(
        `La lección con id ${leccionId} no existe en el sistema`,
      );
    }

    const preguntas = await this.prisma.pregunta.findMany({
      where: { leccionId },
    });

    if (!preguntas || preguntas.length === 0) {
      throw new NotFoundException(
        `La lección con id ${leccionId} no tiene preguntas registradas`,
      );
    }

    // Barajar las preguntas en orden aleatorio (Fisher–Yates shuffle)
    for (let i = preguntas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
    }

    return preguntas;
  }
}
