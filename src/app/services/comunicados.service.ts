import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunicado } from '../models/Comunicado';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {

  // URL BACKEND
  url: string = `${HOST}/comunicados`

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------------------------------
  //                               OBTENER COMUNICADOS
  // ----------------------------------------------------------------------------------
  getComunicados(): Promise<Comunicado[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Comunicado[]>res.data)
      .then(data => { return data; });
  }
  // ----------------------------------------------------------------------------------
  //                              VISIBILIDAD COMUNICADO
  // ----------------------------------------------------------------------------------
  setVisibilidad(id_comunicado: number, vis: boolean) {

    const body = { visible: vis };

    return this.http.put(`${this.url}/${id_comunicado}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }
  // ----------------------------------------------------------------------------------
  //                              ACTUALIZAR COMUNICADO
  // ----------------------------------------------------------------------------------
  actualizarComunicado(id_comunicado: number, comunicado: Comunicado, img: File){

    var body = new FormData();
    body.append('fecha_comunicado', comunicado.fecha_comunicado);
    body.append('imagen', img);

    return this.http.put(`${this.url}/${id_comunicado}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR NOTICIA
  // ----------------------------------------------------------------------------------
  crearComunicado(comunicado: Comunicado, img: File){
    var body = new FormData();
    body.append('fecha_comunicado', comunicado.fecha_comunicado);
    body.append('imagen', img);
    return this.http.post(`${this.url}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR NOTICIA
  // ----------------------------------------------------------------------------------
  eliminarComunicado(id_comunicado: number){
    return this.http.delete(`${this.url}/${id_comunicado}`);
  }
}
