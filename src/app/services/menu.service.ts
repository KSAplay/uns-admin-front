import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuNode } from '../models/menu';
import { HOST } from 'src/assets/shared/var.constant';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    // URL BACKEND
  url: string = `${HOST}/menu`

    constructor(private http: HttpClient) { }

    getMenuItems(): Promise<MenuNode[]> {
        return this.http.get<any>('assets/data/menuitems.json')
            .toPromise()
            .then(res => <MenuNode[]>res.data)
            .then(data => { return data; });
    }

    // Visibilidad del Menu
  setVisibilidad(identificador: number, vis: boolean) {

    const body = { id: identificador, visible: vis };

    return this.http.post(`${this.url}/cambiovisibilidad`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  eliminarMenu(identificador: number){
    const body = { id: identificador};

    return this.http.post(`${this.url}/eliminar`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  cambiarTexto(identificador: number, text: string){
    const body = { id: identificador, texto: text };

    return this.http.post(`${this.url}/cambiotexto`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

}
