import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    items: MenuItem[];


    constructor() { }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Secciones', icon: 'fas fa-tasks',
                items: [
                        {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'secciones/listar'}
                ]
            },
            {
                label: 'Noticias', icon: 'far fa-newspaper',
                items: [
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'noticias/agregar'},
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'noticias/listar'}
                ]
            },
            {
                label: 'Comunicados', icon: 'fas fa-calendar',
                items: [
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'comunicados/agregar'},
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'comunicados/listar'}
                ]
            },
            {
                label: 'Sliders', icon: 'far fa-images',
                items: [
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'sliders/agregar'},
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'sliders/listar'}
                ]
            },
            {
                label: 'Vinculos', icon: 'fas fa-external-link-alt',
                items: [
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'vinculos/agregar'},
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'vinculos/listar'}
                ]
            },
            {
                label: 'Menus', icon: 'fas fa-bars',
                items: [
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'menus/agregar'},
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'menus/listar'}
                ]
            },
        ]
    }

}
