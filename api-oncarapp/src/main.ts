/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);


  app.enableCors(); // Habilita CORS globalmente

  await app.listen(3001);
}
bootstrap();
