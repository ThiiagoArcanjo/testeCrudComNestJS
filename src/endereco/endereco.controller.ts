import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { TokenService } from 'src/token/token.service';
import { Usuario } from 'src/usuario/usuario.entity';
import { usuarioProviders } from 'src/usuario/usuario.providers';
import { EnderecoCadastrarDto } from './dto/endereco.cadastrar.dto';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService,
    private readonly tokenService: TokenService ) {}

  @Get('listar')
  async listarEnderecos(): Promise<Endereco[]>{
    return this.enderecoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('cadastrar')
  async cadastrar(@Body() data: EnderecoCadastrarDto, @Req() req): Promise<ResultadoDto>{
    let token = req.headers.authorization
    let usuario: Usuario = await this.tokenService.getUsuarioByToken(token)
    if(usuario){
      return this.enderecoService.cadastrar(data, usuario)
    }else{
      throw new HttpException({
        errorMessage: 'Token Inválido'
      }, HttpStatus.UNAUTHORIZED)
    }
  }

}
