import { Component, OnInit } from '@angular/core';
import { Slider } from '../../models/Slider';
import { MensajeService } from 'src/app/services/mensaje.service';
import { SlidersService } from 'src/app/services/sliders.service';

@Component({
  selector: 'app-gestion-sliders',
  templateUrl: './gestion-sliders.component.html',
  styleUrls: ['./gestion-sliders.component.scss']
})
export class GestionSlidersComponent implements OnInit {

  noImage: string = '../../../assets/resources/slider/no-image.jpg';
  displayModalAgregarSlider: boolean;
  sliders: Slider[];
  slider: Slider;
  loading : boolean;

  id_slider: number;

  file: File;
  photoSelected: String | ArrayBuffer; 

  constructor(private mensajeService: MensajeService, private slidersService: SlidersService) {
    this.sliders = [];
  }

  ngOnInit(): void {
    this.loading = true;
    this.slider = new Slider;
    this.getSliders();
    this.loading = false;
  }

  getSliders() {
    this.slidersService.getSliders().then(sliders => this.sliders = sliders);
  }
  
  crearSlider(slider: Slider){
    this.displayModalAgregarSlider = false
    this.loading = true;
    this.slider = {...slider};

    this.slidersService.crearSlider(this.slider, this.file).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó la imagen de manera correcta');
        this.loading = false;
        this.getSliders();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar la imagen');
      this.loading = false;
      this.getSliders();
    }
    );
    this.file = null;
    this.photoSelected = null;
  }

  cambioVisibilidad(e, id_slider) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.slidersService.setVisibilidad(id_slider, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.getSliders();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.getSliders();
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

  ConfirmarEliminarSlider(){
    this.mensajeService.clear('s');
    this.loading = true;
    this.slidersService.eliminarSlider(this.id_slider).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó la imagen de manera correcta');
        this.loading = false;
        this.getSliders();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar la imagen');
      this.loading = false;
      this.getSliders();
    }
    );
  }

  RechazarEliminarSlider(){
    this.mensajeService.clear('s');
  }

  eliminarSlider(id_sld: number){
    this.id_slider = id_sld;
    this.mensajeService.clear('s');
    this.mensajeService.confirmarAccion('s','¿Estás seguro de que quieres eliminar la imagen?', 'info');
  }

}
