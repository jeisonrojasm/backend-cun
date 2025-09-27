import { Controller, Get, Post, Body } from '@nestjs/common';
import { EvaluarService } from './evaluar.service';
import { EvaluarDto } from './dto/evaluar.dto';

@Controller('evaluar')
export class EvaluarController {
  constructor(private readonly evaluarService: EvaluarService) { }

  @Post()
  async evaluar(@Body() dto: EvaluarDto) {
    return this.evaluarService.evaluar(dto);
  }
}
