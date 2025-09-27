import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEvaluarDto } from './dto/create-evaluar.dto';
import { UpdateEvaluarDto } from './dto/update-evaluar.dto';
import { PrismaService } from 'prisma/prisma.service';
import { EvaluarDto } from './dto/evaluar.dto';

@Injectable()
export class EvaluarService {
  constructor(private prisma: PrismaService) { }

  async evaluar(dto: EvaluarDto) {
    const pregunta = await this.prisma.pregunta.findUnique({
      where: { id: dto.preguntaId },
    });

    if (!pregunta) {
      throw new NotFoundException('Pregunta no encontrada');
    }

    const esCorrecta = pregunta.respuestaCorrecta === dto.respuesta;

    return {
      preguntaId: pregunta.id,
      enunciado: pregunta.enunciado,
      respuestaEnviada: dto.respuesta,
      correcta: esCorrecta,
    };
  }
  create(createEvaluarDto: CreateEvaluarDto) {
    return 'This action adds a new evaluar';
  }

  findAll() {
    return `This action returns all evaluar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluar`;
  }

  update(id: number, updateEvaluarDto: UpdateEvaluarDto) {
    return `This action updates a #${id} evaluar`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluar`;
  }
}
