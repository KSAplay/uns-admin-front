import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/Noticia';
import { NoticiasService } from 'src/app/services/noticias.service';
import { MensajeService } from 'src/app/services/mensaje.service';

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
  noticia: Noticia = new Noticia;
  fecha: string;
  loading : boolean;

  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private mensajeService: MensajeService, private noticiasService: NoticiasService) {
    this.noticias = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.getNoticias();
    this.loading = false;
  }

  getNoticias() {
    this.noticiasService.getNoticias().then(noticias => this.noticias = noticias);
  }

  crearNoticia(noticia: Noticia){
    this.displayModalAgregarNoticia = false
    this.loading = true;
    this.noticia = {...noticia};

    this.noticiasService.crearNoticia(this.noticia).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó la noticia de manera correcta.');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar la noticia.');
      this.loading = false;
      this.getNoticias();
    }
    );
    this.file = null;
    this.photoSelected = null;
  }

  eliminarNoticia(){
    //this.mensajeService.confirmarEliminar();
  }

  actualizarNoticia(noticia: Noticia){
    this.displayModalEditarNoticia = false
    this.loading = true;
    this.noticia = {...noticia};

    this.noticiasService.actualizarNoticia(1, this.noticia).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se actualizó la noticia de manera correcta.');
        this.loading = false;
        this.getNoticias();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró actualizar la noticia.');
      this.loading = false;
      this.getNoticias();
    }
    );

    this.file = null;
    this.photoSelected = null;
  }

  // Funcion para abrir modal y cargar la data
  editarNoticia(noticia: Noticia) {
    this.noticia = {...noticia};
    this.displayModalEditarNoticia = true;
  }


  cambioVisibilidad(e) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.noticiasService.setVisibilidad(1, isVisible).subscribe(data => {
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
      // Image Preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

}
