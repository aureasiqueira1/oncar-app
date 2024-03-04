/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['https://front-oncar.vercel.app', 
    'https://front-oncar.vercel.app/car', 
    'https://front-oncar.vercel.app/user', 
    'https://api-oncar.vercel.app', 
    'https://api-oncar.vercel.app/car', 
    'https://api-oncar.vercel.app/user'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Specify allowed methods
    credentials: true,
   });

  await app.listen(3001);
}
bootstrap();
