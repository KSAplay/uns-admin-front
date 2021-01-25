import { Component, OnInit } from '@angular/core';
import { Vinculo } from '../../models/Vinculo';
import { MensajeService } from 'src/app/services/mensaje.service';
import { VinculosService } from 'src/app/services/vinculos.service';

@Component({
  selector: 'app-gestion-vinculos',
  templateUrl: './gestion-vinculos.component.html',
  styleUrls: ['./gestion-vinculos.component.scss']
})
export class GestionVinculosComponent implements OnInit {

  noImage: string = '../../../assets/resources/vinculos/no-image.jpg';
  displayModalAgregarVinculo: boolean;
  displayModalEditarVinculo: boolean;
  vinculos: Vinculo[];
  vinculo: Vinculo;
  loading : boolean;

  id_vinculo: number;

  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private mensajeService: MensajeService, private vinculosService: VinculosService) {
    this.vinculos = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.vinculo = new Vinculo;
    this.getVinculos();
    this.loading = false;
  }

  getVinculos() {
    this.vinculosService.getVinculos().then(vinculos => this.vinculos = vinculos);
  }
  
  crearVinculo(vinculo: Vinculo){
    this.displayModalAgregarVinculo = false
    this.loading = true;
    this.vinculo = {...vinculo};

    this.vinculosService.crearVinculo(this.vinculo, this.file).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó el vínculo de manera correcta');
        this.loading = false;
        this.getVinculos();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar el vínculo');
      this.loading = false;
      this.getVinculos();
    }
    );
    this.file = null;
    this.photoSelected = null;
  }

  eliminarVinculo(id_vin: number){
    this.id_vinculo = id_vin;
    this.mensajeService.clear('c');
    this.mensajeService.confirmarAccion('c','¿Estás seguro de que quieres eliminar el vínculo?', 'info');
  }

  actualizarVinculo(id_vinculo: number, vinculo: Vinculo){
    this.displayModalEditarVinculo = false
    this.loading = true;
    this.vinculo = {...vinculo};

    this.vinculosService.actualizarVinculo(id_vinculo, this.vinculo,this.file).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se actualizó el vínculo de manera correcta');
        this.loading = false;
        this.getVinculos();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró actualizar el vínculo');
      this.loading = false;
      this.getVinculos();
    }
    );

    this.file = null;
    this.photoSelected = null;
  }

  // Funcion para abrir modal y cargar la data
  editarVinculo(vinculo: Vinculo) {
    this.file = null;
    this.photoSelected = null;
    this.vinculo = {...vinculo};
    this.displayModalEditarVinculo = true;
  }

  cambioVisibilidad(e, id_vinculo) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.vinculosService.setVisibilidad(id_vinculo, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getVinculos();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getVinculos();
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

  ConfirmarEliminarVinculo(){
    this.mensajeService.clear('c');
    //this.noticias = this.noticias.filter(noticia => noticia.title !== this.noticia.title); // Cambiar para manejarlo con id
    //this.noticia = {srcImage: '', title: '', fecha: '', visible: false};

    this.loading = true;

    this.vinculosService.eliminarVinculo(this.id_vinculo).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó el vínculo de manera correcta');
        this.loading = false;
        this.getVinculos();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar el vínculo');
      this.loading = false;
      this.getVinculos();
    }
    );
  }

  RechazarEliminarVinculo(){
    this.mensajeService.clear('c');
  }

}
