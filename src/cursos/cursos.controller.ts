import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) { }

  @Get()
  findAll() {
    return this.cursosService.findAll();
  }

  @Get(':cursoId/lecciones')
  findLeccionesByCurso(@Param('cursoId') cursoId: string) {
    return this.cursosService.findLeccionesByCurso(+cursoId);
  }
}
