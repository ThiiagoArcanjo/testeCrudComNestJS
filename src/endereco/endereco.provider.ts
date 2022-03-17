import { Connection } from 'typeorm';
import { Endereco } from './endereco.entity';

export const enderecoProviders = [
  {
    provide: 'ENDERECO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Endereco),
    inject: ['DATABASE_CONNECTION'],
  },
];