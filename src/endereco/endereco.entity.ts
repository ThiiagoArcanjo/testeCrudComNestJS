import { Usuario } from "src/usuario/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Endereco{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length:9 })
    cep: string;

    @Column({ length:300 })
    rua: string;

    @Column({ length:200})
    bairro: string;

    @Column({ length:100 })
    cidade:string;

    @Column({ length:100 })
    estado: string;

    @Column({length:100, nullable:true})
    complemento : string;

    //N Para 1 como usuario
    @ManyToOne(() => Usuario, (usuario) => usuario.enderecos)
    usuario : Usuario

}