import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComunicadosComponent } from './components/gestion-comunicados/agregar-comunicados/agregar-comunicados.component';
import { GestionComunicadosComponent } from './components/gestion-comunicados/gestion-comunicados.component';
import { AgregarMenusComponent } from './components/gestion-menus/agregar-menus/agregar-menus.component';
import { GestionMenusComponent } from './components/gestion-menus/gestion-menus.component';
import { AgregarNoticiasComponent } from './components/gestion-noticias/agregar-noticias/agregar-noticias.component';
import { GestionNoticiasComponent } from './components/gestion-noticias/gestion-noticias.component';
import { GestionSeccionesComponent } from './components/gestion-secciones/gestion-secciones.component';
import { AgregarSlidersComponent } from './components/gestion-sliders/agregar-sliders/agregar-sliders.component';
import { GestionSlidersComponent } from './components/gestion-sliders/gestion-sliders.component';
import { AgregarVinculosComponent } from './components/gestion-vinculos/agregar-vinculos/agregar-vinculos.component';
import { GestionVinculosComponent } from './components/gestion-vinculos/gestion-vinculos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NotPageComponent } from './components/not-page/not-page.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
 
  { path: '', component: PrincipalComponent, children: [
      { path: 'inicio', component: InicioComponent },

      {
        path: 'secciones', children: [
          { path: 'listar', component: GestionSeccionesComponent }
        ]
      },
      {
        path: 'noticias', children: [
          { path: 'agregar', component: AgregarNoticiasComponent },
          { path: 'listar', component: GestionNoticiasComponent }
        ]
      },
      {
        path: 'comunicados', children: [
          { path: 'agregar', component: AgregarComunicadosComponent },
          { path: 'listar', component: GestionComunicadosComponent }
        ]
      },
      {
        path: 'sliders', children: [
          { path: 'agregar', component: AgregarSlidersComponent },
          { path: 'listar', component: GestionSlidersComponent }
        ]
      },
      {
        path: 'vinculos', children: [
          { path: 'agregar', component: AgregarVinculosComponent },
          { path: 'listar', component: GestionVinculosComponent }
        ]
      },
      {
        path: 'menus', children: [
          { path: 'agregar', component: AgregarMenusComponent },
          { path: 'listar', component: GestionMenusComponent }
        ]
      }

    ]
  },


  { path: '**', component: NotPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
