import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seccion } from '../models/seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private http: HttpClient) { }

  getSeccion(): Promise<Seccion[]> {
    return this.http.get<any>('assets/data/seccion.json')
      .toPromise()
      .then(res => <Seccion[]>res.data)
      .then(data => { return data; });
  }
}
    