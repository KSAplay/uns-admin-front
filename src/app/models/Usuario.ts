export class Usuario{
    id_usuario?: number;
    nombres: string;
    apelldidos:string;
    email:string;
    password?:string;
    visible?:boolean;
    create_at?:boolean;
    update_at?:boolean;
}
export type RegistrarUsuario = {
    nombres: string;
    apelldidos:string;
    email:string;
    password:string;
}
export type AuhenticarUsuario = {
    email: String,
    password: String
}