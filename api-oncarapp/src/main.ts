/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { CustomSocketIoAdapter } from './custom-socket-io-adapter';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.useWebSocketAdapter(new CustomSocketIoAdapter(app));

  app.enableCors(); // Habilita CORS globalmente

  await app.listen(3001);
}
bootstrap();
