import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [
    AuthModule, EnderecoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
