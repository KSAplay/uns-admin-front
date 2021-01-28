import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private mensajeService: MensajeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  RechazarSalir(){
    this.mensajeService.clear('s');
  }
 
  ConfirmarSalir(){
    this.mensajeService.clear('s');
    localStorage.removeItem('x-session');
    this.router.navigate(['/login']);
  }


}
