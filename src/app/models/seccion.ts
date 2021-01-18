import { Tema } from "./tema";

export interface Seccion {
    id_seccion: number;
    posicion : number;
    nombre: string;
    tema: Tema;
    frontend_id: string;
    visible: boolean;
}