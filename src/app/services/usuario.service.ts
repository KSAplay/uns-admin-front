import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, AuhenticarUsuario, RegistrarUsuario } from '../models/Usuario';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  // URL BACKEND
  url: string = `${HOST}`

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------------------------------
  //                               INICIAR SESION
  // ----------------------------------------------------------------------------------
  IniciarSesion(credenciales: AuhenticarUsuario): Promise<Usuario> {
    return this.http.post<any>(`${this.url}/iniciarSession`, credenciales)
      .toPromise()
      .then(data => { return data; });
  }
  // ----------------------------------------------------------------------------------
  //                              REGISTRAR USUARIO
  // ----------------------------------------------------------------------------------
  RegistrarUsuario(data: RegistrarUsuario): Promise<Usuario> {
    return this.http.post<any>(`${this.url}/iniciarSession`, data)
      .toPromise()
      .then(data => { return data; });
  }
 
}
