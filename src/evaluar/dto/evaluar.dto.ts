import { IsInt, IsString } from 'class-validator';

export class EvaluarDto {
  @IsInt()
  preguntaId: number;

  @IsString()
  respuesta: string;
}