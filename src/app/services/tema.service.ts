import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  getTema(): Promise<Tema[]> {
    return this.http.get<any>('assets/data/tema.json')
      .toPromise()
      .then(res => <Tema[]>res.data)
      .then(data => { return data; });
  }
}
    