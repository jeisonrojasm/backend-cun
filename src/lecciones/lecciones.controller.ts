import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LeccionesService } from './lecciones.service';

@Controller('lecciones')
export class LeccionesController {
  constructor(private readonly leccionesService: LeccionesService) {}

  @Get(':leccionId/preguntas')
  findPreguntasByLeccion(
    @Param('leccionId', ParseIntPipe) leccionId: number
  ) {
    return this.leccionesService.findPreguntasByLeccion(leccionId);
  }
}
