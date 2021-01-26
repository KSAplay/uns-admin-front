import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from 'src/assets/shared/var.constant';
import { Menu } from 'primeng/menu';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    // URL BACKEND
  url: string = `${HOST}/menus`

    constructor(private http: HttpClient) { }

    getMenuItems(id_parent:number): Promise<Menu[]> {
        return this.http.get<any>(`${this.url}/parent/${id_parent}`)
            .toPromise()
            .then(res => <Menu[]>res.data)
            .then(data => { return data; });
    }

    isNodoFinal(id_menu:number): Promise<any> {
      return this.http.get<any>(`${this.url}/isnodofinal/${id_menu}`)
          .toPromise()
          .then(res => { return res; });
  }



 /*
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
*/
}
