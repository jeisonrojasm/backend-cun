import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // lo hace accesible en toda la app sin necesidad de importarlo en cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule { }