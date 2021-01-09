import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';
import { SeccionService } from 'src/app/services/seccion.service';

@Component({
  selector: 'app-gestion-secciones',
  templateUrl: './gestion-secciones.component.html',
  styleUrls: ['./gestion-secciones.component.scss']
})
export class GestionSeccionesComponent implements OnInit {
  
  secciones: Seccion[];

  constructor(private seccionService:SeccionService) { 

  }

  ngOnInit(): void {
    this.seccionService.getSeccion().then(secciones => this.secciones = secciones);

  }

}
