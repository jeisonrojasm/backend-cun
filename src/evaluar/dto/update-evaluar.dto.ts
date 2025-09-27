import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluarDto } from './create-evaluar.dto';

export class UpdateEvaluarDto extends PartialType(CreateEvaluarDto) {}
