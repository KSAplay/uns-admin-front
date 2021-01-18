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

    const body = { id: identificador, visible: vis };

    return this.http.post(`${this.url}/cambiovisibilidad`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // Establecer tema
  setTema(identificador: number, tema_cod: string){
    const body = { id: identificador, tema_code: tema_cod };

    return this.http.post(`${this.url}/cambiotema`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

}
