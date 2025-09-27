import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) { }

  create(createCursoDto: CreateCursoDto) {
    return 'This action adds a new curso';
  }

  async findAll() {
    return this.prisma.curso.findMany();
  }

  async findLeccionesByCurso(cursoId: number) {
    return this.prisma.leccion.findMany({
      where: { cursoId }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} curso`;
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
