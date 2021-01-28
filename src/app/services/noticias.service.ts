import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/Noticia';
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

    var body = new FormData();
    body.append('titular',noticia.titular);
    body.append('fecha_noticia', noticia.fecha_noticia);
    body.append('imagen', img);
    return this.http.put(`${this.url}/${id_noticia}`,body);
    //const body = { titular: noticia.titular , fecha_noticia: noticia.fecha_noticia, imagen: img};
    /*return this.http.post(`${this.url}/${id_noticia}`,body,{
      headers: {
        //'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
        //'Content-Type' : 'application/x-www-form-urlencoded' 
        'Content-Type' : 'multipart/form-data; boundary="boundary"' ,
        //'Content-Length' : '44150'
        //'content-type': "application/json"
      }
    });*/
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR NOTICIA
  // ----------------------------------------------------------------------------------
  crearNoticia(noticia: Noticia, img: File){
    var body = new FormData();
    body.append('titular',noticia.titular);
    body.append('fecha_noticia', noticia.fecha_noticia);
    body.append('imagen', img);
    return this.http.post(`${this.url}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR NOTICIA
  // ----------------------------------------------------------------------------------
  eliminarNoticia(id_noticia: number){
    return this.http.delete(`${this.url}/${id_noticia}`);
  }


}
