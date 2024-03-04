import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

export class CustomSocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: socketio.ServerOptions): any {
    const server = super.createIOServer(port, options);

    server.origins('http://localhost:3000', 'https://api-oncar.vercel.app'); // Defina as origens aqui

    return server;
  }
}
