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
  loading: boolean;

  constructor(private mensajeService: MensajeService, private seccionService: SeccionService, private temaService: TemaService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.getSeccionData();
    this.getTemaData();
    this.loading = false;
  }

  getSeccionData() {
    this.seccionService.getSeccion().then(    secciones => 
      this.secciones = secciones
      );
  }

  getTemaData() {
    this.temaService.getTema().then(
      temas => {
        this.temas = temas
      }
      );
  }

  cambioVisibilidad(e, id_seccion) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.seccionService.setVisibilidad(id_seccion, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getSeccionData();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getSeccionData();
    }
    );

  }

  cambioTema(event, id_seccion) {
    this.loading = true;
    this.seccionService.setTema(id_seccion, event.value.id_tema).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió el tema de manera correcta');
        this.loading = false;
        this.getSeccionData();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar el tema');
      this.loading = false;
      this.getSeccionData();
    });
  }


  cambiarOrden(e){
    this.loading = true;
    this.secciones.forEach((value,index)=>{
      this.seccionService.setPosicion(value.id_seccion,index).subscribe(data =>{
        if(data){
          this.mensajeService.mensajeCorrecto('Se cambió el orden de manera correcta');
        }
      }, (err)=>{
          this.mensajeService.mensajeIncorrecto('No se logró cambiar el orden');
      });
    });

   setTimeout(() => {
    this.getSeccionData();
    this.loading = false;
   }, 500);
   
  }




}




/*



this.secciones.forEach((value,index)=>{
  this.seccionService.setPosicion(value.id_seccion,index).subscribe(data => {
    if(data){
      this.mensajeService.mensajeCorrecto('Se cambió el orden de manera correcta');
    }
  },(err)=>{
    this.mensajeService.mensajeIncorrecto('No se logró cambiar el orden');
  }
  });

}*/