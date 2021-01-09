import { Tema } from "./tema";

export interface Seccion {
    posicion : number;
    nombre: string;
    tema: Tema;
    frontend_id: string;
    visible: boolean;
}