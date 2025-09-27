import { Module } from '@nestjs/common';
import { EvaluarService } from './evaluar.service';
import { EvaluarController } from './evaluar.controller';

@Module({
  controllers: [EvaluarController],
  providers: [EvaluarService],
})
export class EvaluarModule {}
