import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng/primeng.module';

import { HttpClientModule } from '@angular/common/http';

import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { GestionNoticiasComponent } from './components/gestion-noticias/gestion-noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionSeccionesComponent } from './components/gestion-secciones/gestion-secciones.component';
import { GestionEventosComponent } from './components/gestion-eventos/gestion-eventos.component';
import { GestionSlidersComponent } from './components/gestion-sliders/gestion-sliders.component';
import { GestionVinculosComponent } from './components/gestion-vinculos/gestion-vinculos.component';
import { GestionMenusComponent } from './components/gestion-menus/gestion-menus.component';
import { AgregarNoticiasComponent } from './components/gestion-noticias/agregar-noticias/agregar-noticias.component';
import { AgregarMenusComponent } from './components/gestion-menus/agregar-menus/agregar-menus.component';
import { AgregarVinculosComponent } from './components/gestion-vinculos/agregar-vinculos/agregar-vinculos.component';
import { AgregarSlidersComponent } from './components/gestion-sliders/agregar-sliders/agregar-sliders.component';
import { AgregarSeccionesComponent } from './components/gestion-secciones/agregar-secciones/agregar-secciones.component';
import { AgregarEventosComponent } from './components/gestion-eventos/agregar-eventos/agregar-eventos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotPageComponent } from './components/not-page/not-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    LoginComponent,
    PrincipalComponent,
    GestionNoticiasComponent,
    GestionSeccionesComponent,
    GestionEventosComponent,
    GestionSlidersComponent,
    GestionVinculosComponent,
    GestionMenusComponent,
    AgregarNoticiasComponent,
    AgregarMenusComponent,
    AgregarVinculosComponent,
    AgregarSlidersComponent,
    AgregarSeccionesComponent,
    AgregarEventosComponent,
    InicioComponent,
    NotPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
