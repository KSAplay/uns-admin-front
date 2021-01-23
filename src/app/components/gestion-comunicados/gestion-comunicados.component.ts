import { Component, OnInit } from '@angular/core';
import { Comunicado } from '../../models/Comunicado';
import { ComunicadosService } from 'src/app/services/comunicados.service';
import { MensajeService } from 'src/app/services/mensaje.service';

// Dar el autocomplentado de "event"
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-gestion-comunicados',
  templateUrl: './gestion-comunicados.component.html',
  styleUrls: ['./gestion-comunicados.component.scss']
})

export class GestionComunicadosComponent implements OnInit {

  noImage: string = '../../../assets/resources/comunicados/no-image.png';
  displayModalAgregarComunicado: boolean;
  displayModalEditarComunicado: boolean;
  comunicados: Comunicado[];
  comunicado: Comunicado;
  fecha: string;
  loading : boolean;

  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private mensajeService: MensajeService, private comunicadosService: ComunicadosService) {
    this.comunicados = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.comunicado = new Comunicado;
    this.getComunicados();
    this.loading = false;
  }

  getComunicados() {
    this.comunicadosService.getComunicados().then(comunicados => this.comunicados = comunicados);
  }
  
  crearComunicado(comunicado: Comunicado){
    this.displayModalAgregarComunicado = false
    this.loading = true;
    this.comunicado = {...comunicado};

    this.comunicadosService.crearComunicado(this.comunicado).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó el comunicado de manera correcta');
        this.loading = false;
        this.getComunicados();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar el comunicado');
      this.loading = false;
      this.getComunicados();
    }
    );
    this.file = null;
    this.photoSelected = null;
  }

  eliminarComunicado(){
    this.mensajeService.clear('c');
    this.mensajeService.confirmarAccion('c','¿Estás seguro de que quieres eliminar el comunicado?', 'info');
  }

  actualizarComunicado(comunicado: Comunicado){
    this.displayModalEditarComunicado = false
    this.loading = true;
    this.comunicado = {...comunicado};

    this.comunicadosService.actualizarComunicado(1, this.comunicado).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se actualizó el comunicado de manera correcta');
        this.loading = false;
        this.getComunicados();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró actualizar el comunicado');
      this.loading = false;
      this.getComunicados();
    }
    );

    this.file = null;
    this.photoSelected = null;
  }

  // Funcion para abrir modal y cargar la data
  editarComunicado(comunicado: Comunicado) {
    this.comunicado = {...comunicado};
    this.displayModalEditarComunicado = true;
  }

  cambioVisibilidad(e,id_comunicado) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.comunicadosService.setVisibilidad(id_comunicado, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getComunicados();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getComunicados();
    }
    );
  }

  // Para cambiar la imagen seleccionada
  onPhotoSelected(event): void{
    if (event.target.files && event.target.files[0]){
      this.file = event.target.files[0];
      // Image Preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  ConfirmarEliminarComunicado(){
    this.mensajeService.clear('c');
    //this.noticias = this.noticias.filter(noticia => noticia.title !== this.noticia.title); // Cambiar para manejarlo con id
    //this.noticia = {srcImage: '', title: '', fecha: '', visible: false};

    this.loading = true;

    this.comunicadosService.eliminarComunicado(this.comunicado).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó el comunicado de manera correcta');
        this.loading = false;
        this.getComunicados();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar el comunicado');
      this.loading = false;
      this.getComunicados();
    }
    );
  }

  RechazarEliminarComunicado(){
    this.mensajeService.clear('c');
  }
}
