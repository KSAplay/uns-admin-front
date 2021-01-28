import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Slider } from '../models/Slider';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class SlidersService {

  // URL BACKEND
  url: string = `${HOST}/sliders`;

  constructor(private http: HttpClient) { }

  // ----------------------------------------------------------------------------------
  //                               OBTENER SLIDERS
  // ----------------------------------------------------------------------------------
  getSliders(): Promise<Slider[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Slider[]>res.data)
      .then(data => { return data; });
  }
  // ----------------------------------------------------------------------------------
  //                              VISIBILIDAD SLIDER
  // ----------------------------------------------------------------------------------
  setVisibilidad(id_slider: number, vis: boolean) {

    const body = { visible: vis };

    return this.http.put(`${this.url}/${id_slider}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  // ----------------------------------------------------------------------------------
  //                                 CREAR SLIDER
  // ----------------------------------------------------------------------------------
  crearSlider(slider: Slider, img: File){
    var body = new FormData();
    body.append('imagen', img);
    return this.http.post(`${this.url}`, body);
  }

  // ----------------------------------------------------------------------------------
  //                                ELIMINAR SLIDER
  // ----------------------------------------------------------------------------------
  eliminarSlider(id_slider: number){
    return this.http.delete(`${this.url}/${id_slider}`);
  }
}
