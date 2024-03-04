/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import cors from 'cors';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);


  app.use(cors({
   origin: 'https://front-oncar.vercel.app'
  }));
  


  https://api-oncar.vercel.app/user

   
  app.enableCors(); // Habilita CORS globalmente

  await app.listen(3001);
}
bootstrap();
