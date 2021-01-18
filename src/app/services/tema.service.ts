import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  // URL BACKEND
  url: string = `${HOST}/temas`

  constructor(private http: HttpClient) { }

  getTema(): Promise<Tema[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Tema[]>res.data)
      .then(data => { return data; });
  }
}
    