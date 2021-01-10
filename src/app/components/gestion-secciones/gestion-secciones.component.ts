import { Component, OnInit } from '@angular/core';
import { Seccion } from 'src/app/models/seccion';
import { Tema } from 'src/app/models/tema';
import { MensajeService } from 'src/app/services/mensaje.service';
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

  constructor(private mensajeService: MensajeService,private seccionService:SeccionService, private temaService: TemaService) { 

  }

  ngOnInit(): void {
    this.getSeccionData();
   this.getTemaData();
  }

  getSeccionData(){
    this.seccionService.getSeccion().then(secciones => this.secciones = secciones);
  }

  getTemaData(){
    this.temaService.getTema().then(temas => this.temas = temas);
  }

  cambioVisibilidad(e) {
    var visibilidad = e.checked ? 'activa':'inactiva';
    this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a '+visibilidad+' de manera correcta');
    //this.getSeccionData();
  }

  cambioTema(e){
    this.mensajeService.mensajeCorrecto('Se cambió el tema de manera correcta');
    //this.getSeccionData();
  }

}
