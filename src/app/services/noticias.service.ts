import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  // URL BACKEND
  url: string = `${HOST}/noticias`

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------------------------------
  //                                OBTENER NOTICIAS
  // ----------------------------------------------------------------------------------
  getNoticias(): Promise<Noticia[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Noticia[]>res.data)
      .then(data => { return data; });
  }

  // ----------------------------------------------------------------------------------
  //                               VISIBILIDAD NOTICIA
  // ----------------------------------------------------------------------------------
  setVisibilidad(id_noticia: number, vis: boolean) {

    const body = { visible: vis };

    return this.http.put(`${this.url}/${id_noticia}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }
  
  // ----------------------------------------------------------------------------------
  //                                ACTUALIZAR NOTICIA
  // ----------------------------------------------------------------------------------
  actualizarNoticia(id_noticia: number, noticia: Noticia, img: File){
    const body = { titular: noticia.titular , fecha_noticia: noticia.fecha_noticia, imagen: img};
    return this.http.put(`${this.url}/${id_noticia}`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR NOTICIA
  // ----------------------------------------------------------------------------------
  crearNoticia(noticia: Noticia){
    return this.http.post(`${this.url}/crearNoticia`, noticia, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR NOTICIA
  // ----------------------------------------------------------------------------------
  eliminarNoticia(noticia: Noticia){
    return this.http.delete(`${this.url}/${noticia}/eliminarNoticia`);
  }


}
