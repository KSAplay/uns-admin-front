import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarSeccionesComponent } from './components/gestion-secciones/agregar-secciones/agregar-secciones.component';
import { GestionSeccionesComponent } from './components/gestion-secciones/gestion-secciones.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NotPageComponent } from './components/not-page/not-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio' , pathMatch: 'full'},
  { path: 'login',  component: LoginComponent  },
  { path: 'inicio', component: InicioComponent },
  { path: 'secciones',  children: [
    { path: 'agregar', component: AgregarSeccionesComponent},
    { path: 'listar', component: GestionSeccionesComponent}
  ]},
  { path: '**', component: NotPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
