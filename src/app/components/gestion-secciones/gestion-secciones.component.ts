import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';
import { Tema } from 'src/app/models/tema';
import { SeccionService } from 'src/app/services/seccion.service';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-gestion-secciones',
  templateUrl: './gestion-secciones.component.html',
  styleUrls: ['./gestion-secciones.component.scss']
})
export class GestionSeccionesComponent implements OnInit {
  
  secciones: Seccion[];
  temas: Tema[];

  constructor(private seccionService:SeccionService, private temaService: TemaService) { 

  }

  ngOnInit(): void {
    this.seccionService.getSeccion().then(secciones => this.secciones = secciones);
    this.temaService.getTema().then(temas => this.temas = temas);
  }

}
