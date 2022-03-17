import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { enderecoProviders } from './endereco.provider';
import { EnderecoService } from './endereco.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...enderecoProviders,
    EnderecoService,
  ],
})
export class PhotoModule {}