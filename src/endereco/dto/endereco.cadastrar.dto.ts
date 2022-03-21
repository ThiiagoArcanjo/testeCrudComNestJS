import { Usuario } from "src/usuario/usuario.entity";

export interface EnderecoCadastrarDto{
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento: string;
}