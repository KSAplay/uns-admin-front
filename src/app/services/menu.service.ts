import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HOST } from 'src/assets/shared/var.constant';
import { Menu } from '../models/menu';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // URL BACKEND
  url: string = `${HOST}/menus`

  constructor(private http: HttpClient) { }

  createMenu(menu: Menu,id_pare: number) {

    const body = {  
      id_parent: id_pare, 
      nombre: menu.nombre,
      ruta: menu.ruta};
    return this.http.post(`${this.url}/`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }



  getMenuItems(id_parent: number): Promise<Menu[]> {
    return this.http.get<any>(`${this.url}/parent/${id_parent}`)
      .toPromise()
      .then(res => <Menu[]>res.data)
      .then(data => { return data; });
  }

  
  getMenus(): Promise<Menu[]> {
    return this.http.get<any>(`${this.url}`)
      .toPromise()
      .then(res => <Menu[]>res.data)
      .then(data => { return data; });
  }


  setVisibilidad(id_menu: number, vis: boolean) {

    const body = {  visible: vis };

    return this.http.put(`${this.url}/${id_menu}/visible`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

  
 
 
   eliminarMenu(id_menu: number){
 
     return this.http.delete(`${this.url}/${id_menu}`);
   }
 
   cambiarTexto(id_menu: number, nombreNuevo: string){
     const body = { nombre: nombreNuevo };
 
     return this.http.put(`${this.url}/${id_menu}/nombre`, body, {
       headers: {
         'content-type': "application/json"
       }
     });
   }


     // Cambiar posicion
  setPosicion(id_menu: number, pos: number){
    const body = { orden: pos };

    return this.http.put(`${this.url}/${id_menu}/posicion`, body, {
      headers: {
        'content-type': "application/json"
      }
    });
  }

 
}
