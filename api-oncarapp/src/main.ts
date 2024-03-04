/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import { config } from 'dotenv';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
    optionsSuccessStatus: 200,
    accessControlAllowHeaders: 'Accept',
  };

  app.use(cors(corsOptions));

  await app.listen(3001);
}
bootstrap();
