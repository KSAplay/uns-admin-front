import { Component, OnInit } from '@angular/core';
import { MenuNode } from 'src/app/models/menu';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-gestion-menus',
  templateUrl: './gestion-menus.component.html',
  styleUrls: ['./gestion-menus.component.scss']
})
export class GestionMenusComponent implements OnInit {

  menuitems: MenuNode[];
  loading: boolean;

  constructor(private mensajeService: MensajeService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getMenuItems();
    this.loading = false;
  }

  getMenuItems() {
    this.menuService.getMenuItems().then(menuitems => this.menuitems = menuitems);
  }

  cambiovisibilidad(e) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.menuService.setVisibilidad(1, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getMenuItems();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getMenuItems();
    }
    );
  }

  eliminarMenu(id: number){
    this.mensajeService.clear('toast-menu');
    this.mensajeService.confirmarAccion('toast-menu','¿Estás seguro de que quieres eliminar el menú?', 'info');
  }

  confirmarEliminarMenu(){
    this.loading = true;
    this.mensajeService.clear('toast-menu');
    this.menuService.eliminarMenu(1).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó el menú de manera correcta');
        this.loading = false;
        this.getMenuItems();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar el menú');
      this.loading = false;
      this.getMenuItems();
    }
    );
  }

  rechazarEliminarMenu(){
    this.mensajeService.clear('toast-menu');
  }

  cambioTexto(){
    this.loading = true;
    this.mensajeService.clear('toast-menu');
    this.menuService.cambiarTexto(1,"").subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió el nonbre de manera correcta');
        this.loading = false;
        this.getMenuItems();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar el nombre');
      this.loading = false;
      this.getMenuItems();
    }
    );
  }

  


}
