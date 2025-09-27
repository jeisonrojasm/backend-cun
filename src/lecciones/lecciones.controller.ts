import { Controller, Get, Param } from '@nestjs/common';
import { LeccionesService } from './lecciones.service';

@Controller('lecciones')
export class LeccionesController {
  constructor(private readonly leccionesService: LeccionesService) { }

  @Get(':leccionId/preguntas')
  findPreguntasByLeccion(@Param('leccionId') leccionId: string) {
    return this.leccionesService.findPreguntasByLeccion(+leccionId);
  }
}
