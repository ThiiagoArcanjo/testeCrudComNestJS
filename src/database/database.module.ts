// arquivo responsavel por  colocar o modulo databaseproviders e exportar o mesmo
// Tatno a classe como o modulo
// Pois assim é possível injetar a classe usando o @Inject()

import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
