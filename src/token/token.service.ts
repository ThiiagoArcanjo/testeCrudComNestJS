import { HttpStatus, forwardRef } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import { Token } from './token.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TokenService {
  
  constructor(
    @Inject('TOKEN_REPOSITORY')
    private tokenRepository: Repository<Token>,
    private usuarioService: UsuarioService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService
  ) {}

  async save(hash: string, username: string){
    let objToken = await this.tokenRepository.findOne({username: username})
    if(objToken){
      this.tokenRepository.update(objToken.id, {
        hash: hash
      })
    }else{
      this.tokenRepository.insert({
        hash: hash,
        username: username
      })
    }
  }

  async refreshToken(oldeToken: string){
    let objToken = await this.tokenRepository.findOne({ hash: oldeToken })
    if(objToken){
      let usuario = await this.usuarioService.findOne(objToken.username);
      return this.authService.login(usuario);
    }else{// É uma requisição inválida
      return new HttpException({
        errorMessage: 'Token Inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

  

}