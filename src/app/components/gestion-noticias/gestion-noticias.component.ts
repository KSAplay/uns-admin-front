import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/Noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

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
  
  displayModalEditarNoticia: boolean;
  displayModalAgregarNoticia: boolean;
  noticias: Noticia[];
  fecha: string;

  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private noticiasService: NoticiasService) {
    this.noticias = [];
  }

  ngOnInit(): void {
    this.noticiasService.getNoticias().then(res =>{ 
      this.noticias = res
    });
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

  actualizarNoticia(){

  }

  agregarNoticia(){

  }

  eliminarNoticia(){

  }

  mostrarModalEditarNoticia() {
    this.displayModalEditarNoticia = true;
  }

  mostrarModalAgregarNoticia() {
    this.displayModalAgregarNoticia = true;
  }

  cambiarValor(){
    this.noticias[0].visible = false;
  }

}
