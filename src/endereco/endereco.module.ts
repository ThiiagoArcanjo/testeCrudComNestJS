import { Module } from '@nestjs/common';
import { TokenModule } from 'src/token/token.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { DatabaseModule } from '../database/database.module';
import { EnderecoController } from './endereco.controller';
import { enderecoProviders } from './endereco.provider';
import { EnderecoService } from './endereco.service';

@Module({
  imports: [DatabaseModule, UsuarioModule, TokenModule],
  controllers:[EnderecoController],
  providers: [
    ...enderecoProviders,
    EnderecoService,
  ],
})
export class EnderecoModule {}