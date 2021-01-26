import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vinculo } from '../models/Vinculo';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class VinculosService {

  // URL BACKEND
  url: string = `${HOST}/vinculos`

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------------------------------
  //                               OBTENER VINCULOS
  // ----------------------------------------------------------------------------------
  getVinculos(): Promise<Vinculo[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Vinculo[]>res.data)
      .then(data => { return data; });
  }
  // ----------------------------------------------------------------------------------
  //                              VISIBILIDAD VINCULO
  // ----------------------------------------------------------------------------------
  setVisibilidad(id_vinculo: number, vis: boolean) {

    const body = { visible: vis };

    return this.http.put(`${this.url}/${id_vinculo}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }
  // ----------------------------------------------------------------------------------
  //                              ACTUALIZAR VINCULO
  // ----------------------------------------------------------------------------------
  actualizarVinculo(id_vinculo: number, vinculo: Vinculo, img: File){

    var body = new FormData();
    body.append('imagen', img);

    return this.http.put(`${this.url}/${id_vinculo}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR VINCULO
  // ----------------------------------------------------------------------------------
  crearVinculo(vinculo: Vinculo, img: File){
    var body = new FormData();
    body.append('imagen', img);
    return this.http.post(`${this.url}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR VINCULO
  // ----------------------------------------------------------------------------------
  eliminarVinculo(id_vinculo: number){
    return this.http.delete(`${this.url}/${id_vinculo}`);
  }
}
