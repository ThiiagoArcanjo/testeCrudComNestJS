//Entidade responsavel pelo objeto e criar a tabela no banco de dados

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //defini que a calsse é  uma entidade
export class Usuario {
  @PrimaryGeneratedColumn()//Defini que é uma chave primeria gerada automaticamente
  id: number;

  @Column({ length: 100 }) // Legth: 100 Campo pode ter até 100 caracteres
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

}
