/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3001/car',
      'http://localhost:3001/user',
      'https://front-oncar.vercel.app',
      'https://api-oncar.vercel.app',
      'https://api-oncar.vercel.app/car',
      'https://api-oncar.vercel.app/user',
    ],
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"],
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
