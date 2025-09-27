import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':cursoId/lecciones')
  findLeccionesByCurso(
    @Param('cursoId', ParseIntPipe) cursoId: number
  ) {
    return this.cursosService.findLeccionesByCurso(cursoId);
  }
}
