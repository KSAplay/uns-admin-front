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
  actualizarComunicado(identificador: number, comunicado: Comunicado){
    const body = { id: identificador, comunicado: comunicado };

    return this.http.patch(`${this.url}/actualizarComunicado`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR NOTICIA
  // ----------------------------------------------------------------------------------
  crearComunicado(comunicado: Comunicado){
    return this.http.post(`${this.url}/crearComunicado`, comunicado, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR NOTICIA
  // ----------------------------------------------------------------------------------
  eliminarComunicado(comunicado: Comunicado){
    return this.http.delete(`${this.url}/${comunicado}/eliminarComunicado`);
  }
}
