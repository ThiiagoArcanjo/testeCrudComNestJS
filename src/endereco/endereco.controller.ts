import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { usuarioProviders } from 'src/usuario/usuario.providers';
import { EnderecoCadastrarDto } from './dto/endereco.cadastrar.dto';
import { Endereco } from './endereco.entity';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService ) {}

  @Get('listar')
  async listarEnderecos(): Promise<Endereco[]>{
    return this.enderecoService.findAll();
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: EnderecoCadastrarDto): Promise<ResultadoDto>{
    return this.enderecoService.cadastrar(data);
  }

}
