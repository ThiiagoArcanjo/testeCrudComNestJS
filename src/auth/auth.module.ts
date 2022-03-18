import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'
import { UsuarioModule } from 'src/usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  imports: [UsuarioModule, PassportModule ],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
