
import { Connection } from 'typeorm'; // Import de conexão
import { Usuario } from './usuario.entity'; // Import de entidade usuário

//Criando um provider para injeção em classes
export const usuarioProviders = [ 
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: ['DATABASE_CONNECTION'],
  },
];
