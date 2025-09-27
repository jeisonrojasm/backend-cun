import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // ValidationPipe global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // elimina propiedades que no están en el DTO
      forbidNonWhitelisted: true,   // lanza error si hay propiedades extra
      transform: true,              // transforma automáticamente tipos según DTO
      transformOptions: { enableImplicitConversion: true }, // permite conversión implícita en params/query
    }),
  );

  // Registrar el filter globalmente
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
