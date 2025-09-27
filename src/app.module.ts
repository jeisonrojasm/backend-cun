import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { PrismaModule } from 'prisma/prisma.module';
import { LeccionesModule } from './lecciones/lecciones.module';
import { EvaluarModule } from './evaluar/evaluar.module';

@Module({
  imports: [
    CursosModule,
    PrismaModule,
    LeccionesModule,
    EvaluarModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
