import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Endereco } from './endereco.entity';

@Injectable()
export class EnderecoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private enderecoRepository: Repository<Endereco>,
  ) {}

  async findAll(): Promise<Endereco[]> {
    return this.enderecoRepository.find();
  }
}
