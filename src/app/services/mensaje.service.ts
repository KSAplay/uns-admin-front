import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private messageService: MessageService) { }

  guardadoCorrecto() {
    this.messageService.add({severity:'success', summary: 'Guardado satisfactorio', detail: 'El contenido se guardó correctamente en la base de datos'}); 
  }

  guardadoIncorrecto() {
    //this.messageService.add({severity:'error', summary: 'Guardado Incorrecto', detail: 'El contenido no se guardó correctamente en la base de datos'});
  }

  mensajeCorrecto(mensaje: string) {
    this.messageService.add({severity:'success', summary: 'Guardado satisfactorio', detail: mensaje}); 
  }


  mensajeIncorrecto(mensaje: string) {
    this.messageService.add({severity:'error', summary: '¡Ups!, guardado incorrecto', detail: mensaje}); 
  }

  confirmarAccion(key: string, pregunta: string, type: string){
      this.messageService.clear();
      this.messageService.add({key: key, sticky: true, severity: type, summary: pregunta, detail:'Confirmar para proceder'});
  }

  clear(key: string){
    this.messageService.clear(key);
  }
}
