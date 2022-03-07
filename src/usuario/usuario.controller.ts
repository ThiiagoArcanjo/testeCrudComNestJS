import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService) {}

    //Implementa o método do serviço listar.
    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioService.listar();
    }

    //Impletamenta o metodo update
    @Put('alterarUsuario/:id')
    async alterarUsuario(@Param('id') id: number, @Body() usuario: Usuario){
        return this.usuarioService.update(id, usuario);
    }

    //Implementa o método do serviço listarPorId
    @Get('listarPorId/:id')
    async listarPorId(@Param('id') id : number) : Promise<Usuario>{
        return this.usuarioService.listarPorId(id);

    }

    //Implementa o método do serviço cadastrar.
    @Post('cadastrar')
    async cadastrar(@Body() data: UsuarioCadastrarDto): Promise<ResultadoDto>{
        return  this.usuarioService.cadastrar(data);
    }

    //Implementa o método cadastrar
    @Delete('deletarUsuario/:id')
    async deletarUsuario(@Param('id') id: number){
        return this.usuarioService.deletarUsuario(id);
    }

}