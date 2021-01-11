import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // URL BACKEND
  url: string = `${HOST}/noticia`

  constructor(private http: HttpClient) { }

  getNoticias(): Promise<Noticia[]> {
    return this.http.get<any>('assets/data/noticias.json')
      .toPromise()
      .then(res => <Noticia[]>res.data)
      .then(data => { return data; });
  }

  // Visibilidad de la Noticia
  setVisibilidad(identificador: number, vis: boolean) {

    const body = { id: identificador, visible: vis };

    return this.http.post(`${this.url}/cambiovisibilidadNoticia`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  actualizarNoticia(identificador: number, noticia: Noticia){
    const body = { id: identificador, noticia: noticia };

    return this.http.post(`${this.url}/actualizarNoticia`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  agregarNoticia(noticia: Noticia){
    return this.http.post(`${this.url}/agregarNoticia`, noticia, {
      headers: {
        'content-type': "application/json"
      }
    });
  }


}
