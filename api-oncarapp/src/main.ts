/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://front-oncar-8sgt9tqfp-aureasiqueira1s-projects.vercel.app");
    res.header("Access-Control-Allow-Origin", "https://front-oncar.vercel.app"); // Update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "https://front-oncar.vercel.app/car"); // Update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "https://front-oncar.vercel.app/user"); // Update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  

   
  app.enableCors(); // Habilita CORS globalmente

  await app.listen(3001);
}
bootstrap();
