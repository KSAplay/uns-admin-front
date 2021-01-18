import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../models/seccion';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  // URL BACKEND
  url: string = `${HOST}/secciones`

  constructor(private http: HttpClient) { }

  // Obtener Secciones
  getSeccion(): Promise<Seccion[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Seccion[]>res.data)
      .then(data => { return data; });
  }

  // Visibilidad de la Seccion
  setVisibilidad(identificador: number, vis: boolean) {

    const body = { id_seccion: identificador, visible: vis };

    return this.http.put(`${this.url}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // Establecer tema
  setTema(identificador: number, id_tem: number){
    const body = { id_seccion: identificador, id_tema: id_tem };

    return this.http.put(`${this.url}/tema`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // Cambiar posicion
  setPosicion(id: number, pos: number){
    const body = { id_seccion: id, posicion: pos };

    return this.http.put(`${this.url}/posicion`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

}
