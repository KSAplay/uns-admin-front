import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MensajeService } from 'src/app/services/mensaje.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

   items: MenuItem[];
   opciones: MenuItem[];

  constructor(private mensajeService: MensajeService) { }

  ngOnInit(): void {

    this.opciones = [];

    this.items = [
     /* {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }*/
    ];
  }

  cerrarSesion(){
      this.mensajeService.clear('s');
      this.mensajeService.confirmarAccion('s','¿Estás seguro de que quieres salir?', 'warn');
  }
}
