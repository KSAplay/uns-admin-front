import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/Noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { MensajeService } from 'src/app/services/mensaje.service';
import { title } from 'process';

// Dar el autocomplentado de "event"
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-gestion-noticias',
  templateUrl: './gestion-noticias.component.html',
  styleUrls: ['./gestion-noticias.component.scss']
})
export class GestionNoticiasComponent implements OnInit {
  
  noImage: string = '../../../assets/resources/noticias/no-image.png';
  displayModalAgregarNoticia: boolean;
  displayModalEditarNoticia: boolean;
  noticias: Noticia[];
  noticia: Noticia;
  fecha: string;
  loading : boolean;

  id_noticia: number;

  
  imagenCambiada: boolean;
  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private mensajeService: MensajeService, private noticiasService: NoticiasService) {
    this.noticias = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.noticia = new Noticia;
    this.getNoticias();
    this.loading = false;
    this.imagenCambiada = false;
  }

  getNoticias() {
    this.noticiasService.getNoticias().then(noticias => {
      this.noticias = noticias
    });
    
  }

  crearNoticia(noticia: Noticia){
    this.displayModalAgregarNoticia = false
    this.loading = true;
    this.noticia = {...noticia};

    this.noticiasService.crearNoticia(this.noticia, this.file).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó la noticia de manera correcta');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar la noticia');
      this.loading = false;
      this.getNoticias();
    }
    );
    this.file = null;
    this.photoSelected = null;
  }

  eliminarNoticia(id_not: number){
    this.id_noticia = id_not;
    this.mensajeService.clear('n');
    this.mensajeService.confirmarAccion('n','¿Estás seguro de que quieres eliminar la noticia?', 'info');
  }

  actualizarNoticia(id_noticia,noticia: Noticia){
    this.displayModalEditarNoticia = false
    this.loading = true;
    this.noticia = {...noticia};

    this.noticiasService.actualizarNoticia(id_noticia, this.noticia, this.file).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se actualizó la noticia de manera correcta');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró actualizar la noticia');
      this.loading = false;
      this.getNoticias();
    }
    );
    this.file = null;
    this.photoSelected = null;
    
  }

  // Funcion para abrir modal y cargar la data
  editarNoticia(noticia: Noticia) {
    this.file = null;
    this.photoSelected = null;
    this.noticia = {...noticia};
    this.displayModalEditarNoticia = true;
  }

  abrirModalCrearNoticia(){
    this.displayModalAgregarNoticia = true; 
    this.noticia =new Noticia;
    this.file = null;
    this.photoSelected = null;
  }


  cambioVisibilidad(e, id_noticia: number) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';
    this.noticiasService.setVisibilidad(id_noticia, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getNoticias();
    }
    );
    
  }

  // Para cambiar la imagen seleccionada
  onPhotoSelected(event): void{
    if (event.target.files && event.target.files[0]){
      this.file = event.target.files[0];
      this.imagenCambiada = false;
      // Image Preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  ConfirmarEliminarNoticia(){
    this.mensajeService.clear('n');
    //this.noticias = this.noticias.filter(noticia => noticia.title !== this.noticia.title); // Cambiar para manejarlo con id
    //this.noticia = {srcImage: '', title: '', fecha: '', visible: false};

    this.loading = true;

    this.noticiasService.eliminarNoticia(this.id_noticia).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó la noticia de manera correcta');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar la noticia');
      this.loading = false;
      this.getNoticias();
    }
    );
  }

  RechazarEliminarNoticia(){
    this.id_noticia=null;
    this.mensajeService.clear('n');
  }


  cerrarModalEditarNoticia(){
    this.displayModalEditarNoticia = false; 
    this.noticia = new Noticia(); 
    this.file = null; 
    this.photoSelected = null;
  }

}
