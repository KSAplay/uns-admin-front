import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario, AuhenticarUsuario, RegistrarUsuario } from '../models/Usuario';
import { HOST } from 'src/assets/shared/var.constant';
import { MensajeService } from 'src/app/services/mensaje.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
  // URL BACKEND
  url: string = `${HOST}`
 

  constructor(private http: HttpClient, private mensajeService: MensajeService, private _route: Router ) { }

  // ----------------------------------------------------------------------------------
  //                               INICIAR SESION
  // ----------------------------------------------------------------------------------
  IniciarSesion(credenciales: AuhenticarUsuario): Promise<Usuario> {
    return this.http.post<any>(`${this.url}/iniciarSession`, credenciales)
      .toPromise()
      .then(data => { 
        localStorage.setItem("x-session", JSON.stringify(data));
        console.log(data)
        this._route.navigate(['/inicio'])
        return data;
       }).catch(error => {
         //console.log(error.error.message)
         const errorText = error.error.message
         //this.mensajeService.clear('s');
         //this.mensajeService.confirmarAccion('s','¿Estás seguro de que quieres salir?', 'warn');
         this.mensajeService.loginIncorrecto(errorText)
       });
  }
  // ----------------------------------------------------------------------------------
  //                              REGISTRAR USUARIO
  // ----------------------------------------------------------------------------------
  RegistrarUsuario(data: RegistrarUsuario): Promise<Usuario> {
    return this.http.post<any>(`${this.url}/registrarUsuario`, data)
      .toPromise()
      .then(data => { return data; });
  }
 
}
