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
    //this.messageService.add({severity:'success', summary: 'Guardado satisfactorio', detail: 'El contenido se guardó correctamente en la base de datos'});
  }

  mensajeCorrecto(mensaje: string) {
    this.messageService.add({severity:'success', summary: 'Guardado satisfactorio', detail: mensaje}); 
  }


  mensajeIncorrecto(mensaje: string) {
    this.messageService.add({severity:'error', summary: 'Ups, guardado incorrecto', detail: mensaje}); 
  }

  // Para confirmar acciones
  /*
  confirmarEliminar() {
      this.confirmationService.confirm({
          message: '¿Estás seguro que quieres eliminar esta noticia?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.messageService.add({severity:'info', summary:'Confirmado', detail:'Noticia eliminada'});
          },
          reject: () => {
              this.messageService.add({severity:'info', summary:'Rechazado', detail:'No has eliminado la noticia'});
          }
      });
  }
  */
}
