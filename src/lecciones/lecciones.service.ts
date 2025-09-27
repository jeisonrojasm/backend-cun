import { Injectable } from '@nestjs/common';
import { CreateLeccioneDto } from './dto/create-leccione.dto';
import { UpdateLeccioneDto } from './dto/update-leccione.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LeccionesService {
  constructor(private prisma: PrismaService) { }
  create(createLeccioneDto: CreateLeccioneDto) {
    return 'This action adds a new leccione';
  }

  findAll() {
    return `This action returns all lecciones`;
  }

  async findPreguntasByLeccion(leccionId: number) {
    const preguntas = await this.prisma.pregunta.findMany({
      where: { leccionId },
    });

    // Barajar las preguntas en orden aleatorio (Fisher–Yates shuffle)
    for (let i = preguntas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [preguntas[i], preguntas[j]] = [preguntas[j], preguntas[i]];
    }

    return preguntas;
  }

  findOne(id: number) {
    return `This action returns a #${id} leccione`;
  }

  update(id: number, updateLeccioneDto: UpdateLeccioneDto) {
    return `This action updates a #${id} leccione`;
  }

  remove(id: number) {
    return `This action removes a #${id} leccione`;
  }
}
