import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { UsuariosService } from '../../services/usuario.service'
import { AuhenticarUsuario, RegistrarUsuario, Usuario } from '../../models/Usuario'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  Cuenta: Usuario = new Usuario()
  constructor(
    private _FormBuilder:FormBuilder,
    private _usuarioServices:UsuariosService,
  
  ) {
    this.formLogin = _FormBuilder.group({
      email:["", [Validators.required, Validators.email]],
      password:["", [Validators.required]]
    })
   }

  ngOnInit(): void {
  }


  login() {
    let usuario: AuhenticarUsuario = this.formLogin.value;
    this._usuarioServices.IniciarSesion(usuario).then((data: Usuario) => {
      this.Cuenta = data
    
    })
  }
}
