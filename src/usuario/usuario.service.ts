import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { UsuarioCadastrarDto } from './dto/usuario.cadastrar.dto';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

//Responsavel por serviços com o banco de dados
//Injeta a conexão
@Injectable()
export class UsuarioService {
  
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}
  
  //Retorna um array de usuários
  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  //Retorna um usuário por ID
  async listarPorId(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne(id);
  }

  //Retorna uma alteração por ID
  async update(id: number, usuario: Usuario){
      return this.usuarioRepository.update(id, usuario);
  }

  //recebe um usuárioCadastrarDto uma interface com as informações do cadastro
  //retorna um ResultadoDto, uma interaface de resposta com uma mensagem e um booleano de verdadeiro ou falso 
  async cadastrar(data: UsuarioCadastrarDto) : Promise<ResultadoDto>{// data é do tipo implementação de cadadstro DTO // o Resultado tb é um DTO(esta na pasta DTO do src)
    let usuario = new Usuario()
    usuario.email = data.email
    usuario.nome = data.nome
    usuario.password = bcrypt.hashSync(data.senha, 8) // Na interface o atributo esta descrito como senha, porém na entity esta password e por isso a diferença
    return this.usuarioRepository.save(usuario) //respositório instanciado no construtor, retorna o cadastro do usuário com sucesso ou erro 
    .then((result) => {
        return <ResultadoDto>{
            status: true,
            mensagem: "Usuário cadastrado com sucesso"
        }
    })
    .catch((error) => {
        return <ResultadoDto>{
            status: false,
            mensagem: "Houve um erro no cadastro do usuário"
        }
    })

  }

  // Deleta usuário por ID
  async deletarUsuario(id: number){
    return this.usuarioRepository.delete(id);
  }

  async findOne(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({email : email});
  }
}
