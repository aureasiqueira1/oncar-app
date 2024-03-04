/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as cors from 'cors';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: '*', // Allow any origin, or specify a list of allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
  }));

  await app.listen(3001);
}
bootstrap();
