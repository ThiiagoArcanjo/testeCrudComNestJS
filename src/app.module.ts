import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.model';

@Module({
  imports: [
    UsuarioModule // É preciso adicionar o usuarioModule para que ele seja visto no sistema
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
