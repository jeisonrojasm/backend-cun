import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluarService } from './evaluar.service';
import { CreateEvaluarDto } from './dto/create-evaluar.dto';
import { UpdateEvaluarDto } from './dto/update-evaluar.dto';
import { EvaluarDto } from './dto/evaluar.dto';

@Controller('evaluar')
export class EvaluarController {
  constructor(private readonly evaluarService: EvaluarService) { }

  @Post()
  async evaluar(@Body() dto: EvaluarDto) {
    return this.evaluarService.evaluar(dto);
  }

  @Post()
  create(@Body() createEvaluarDto: CreateEvaluarDto) {
    return this.evaluarService.create(createEvaluarDto);
  }

  @Get()
  findAll() {
    return this.evaluarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluarDto: UpdateEvaluarDto) {
    return this.evaluarService.update(+id, updateEvaluarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluarService.remove(+id);
  }
}
