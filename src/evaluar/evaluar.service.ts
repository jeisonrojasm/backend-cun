import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EvaluarDto } from './dto/evaluar.dto';

@Injectable()
export class EvaluarService {
  constructor(private prisma: PrismaService) {}

  async evaluar(dto: EvaluarDto) {
    const pregunta = await this.prisma.pregunta.findUnique({
      where: { id: dto.preguntaId },
    });

    if (!pregunta) {
      throw new NotFoundException(`La pregunta con id ${dto.preguntaId} no existe en el sistema`);
    }

    if (!pregunta.opciones.includes(dto.respuesta)) {
      throw new BadRequestException(
        `La respuesta enviada no es válida para la pregunta con id ${dto.preguntaId}`,
      );
    }

    const esCorrecta = pregunta.respuestaCorrecta === dto.respuesta;

    return {
      preguntaId: pregunta.id,
      enunciado: pregunta.enunciado,
      respuestaEnviada: dto.respuesta,
      correcta: esCorrecta,
    };
  }
}
