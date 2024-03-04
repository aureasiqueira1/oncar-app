/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);
  const whitelist = ['http://localhost:3001/', 'http://localhost:3001/car', 'http://localhost:3001/user', 'http://localhost:3000/', 'http://localhost:3000/car', 'http://localhost:3000/user', 
  'https://front-oncar.vercel.app/', 'https://front-oncar.vercel.app/car', 
  'https://front-oncar.vercel.app/user', 'https://api-oncar.vercel.app/', 
  'https://api-oncar.vercel.app/car', 'https://api-oncar.vercel.app/user'];

  app.enableCors({
    origin: function (origin, callback) {
       if (whitelist.indexOf(origin) !== -1) {
         callback(null, true);
       } else {
         callback(new Error('Not allowed by CORS'));
       }
    },
    credentials: true,
   });

  await app.listen(3001);
}
bootstrap();
