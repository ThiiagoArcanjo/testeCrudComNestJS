//Provider responsavel pela conexão

import { createConnection } from 'typeorm'; // Importando criação de conexão do typeorm

export const databaseProviders = [ // Dados para possbilitar a conexão
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root',
      password: '',
      database: 'bd_usuarios', 
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}', // diretório onde estão as entidades do projeto, posta  no diretório da classe
      ],
      synchronize: true, // Toda alteração realizada na entidade é sincronizada com o bd, PS: isso não deve ser usado em produção, pois pode gerar perca de dados
    }),
  },
];
