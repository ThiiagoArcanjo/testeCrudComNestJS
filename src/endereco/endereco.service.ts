import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { Repository } from 'typeorm';
import { EnderecoCadastrarDto } from './dto/endereco.cadastrar.dto';
import { Endereco } from './endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('ENDERECO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }

  async cadastrar(data: EnderecoCadastrarDto, usuario:Usuario): Promise<ResultadoDto>{
    let endereco =  new Endereco();
    endereco.cep = data.cep;
    endereco.rua = data.rua;
    endereco.bairro = data.bairro;
    endereco.cidade = data.cidade;
    endereco.estado = data.estado;
    endereco.complemento = data.complemento;
    endereco.usuario = usuario;
    return this.enderecoRepository.save(endereco).then(() => {
      return <ResultadoDto>{
        status: true,
        mensagem: "Endereço Cadastrado com sucesso"
      }
    }).catch(()=>{
      return <ResultadoDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o Endereço"
      }
    })
   
  }

}
