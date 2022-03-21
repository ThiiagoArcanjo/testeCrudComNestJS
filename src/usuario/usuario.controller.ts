import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService,
        private authService: AuthService
        ) {}

    //Implementa o método do serviço listar.
    @UseGuards(JwtAuthGuard)
    @Get('listar')
    async listar(): Promise<Usuario[]>{
        return this.usuarioService.listar();
    }

    //Impletamenta o metodo update
    @UseGuards(JwtAuthGuard)
    @Put('alterarUsuario/:id')
    async alterarUsuario(@Param('id') id: number, @Body() usuario: Usuario){
        return this.usuarioService.update(id, usuario);
    }

    //Implementa o método do serviço listarPorId
    @UseGuards(JwtAuthGuard)
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
    @UseGuards(JwtAuthGuard)
    @Delete('deletarUsuario/:id')
    async deletarUsuario(@Param('id') id: number){
        return this.usuarioService.deletarUsuario(id);
    }

    
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        //return req.user; //Tem que retornar exatamente dessa forma. // Retirado para retornar o metodo do authservice
        return this.authService.login(req.user);
    }

    


}