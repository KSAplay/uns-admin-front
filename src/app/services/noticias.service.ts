import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(): Promise<Noticia[]> {
    return this.http.get<any>('assets/data/noticias.json')
      .toPromise()
      .then(res => <Noticia[]>res.data)
      .then(data => { return data; });
  }
}
