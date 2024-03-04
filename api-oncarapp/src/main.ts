/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as cors from 'cors';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.use(cors());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });
  
  await app.listen(3001);
}
bootstrap();
