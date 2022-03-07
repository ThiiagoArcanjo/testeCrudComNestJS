//Interface onde definimos oque será transferido do frontend para o backend
export interface UsuarioCadastrarDto{
    //Para pamateros opcionais pode ser usado o ?
    nome: string;
    email: string;
    senha: string;
}