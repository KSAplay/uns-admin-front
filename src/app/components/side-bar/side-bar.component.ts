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
                label: 'Menus', icon: 'fas fa-bars',
                items: [
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'menus/listar'},
                    {label: 'Agregar', icon:' pi pi-fw pi-plus', routerLink: 'menus/agregar'}
                ]
            },
            {
                label: 'Sliders', icon: 'far fa-images',
                items: [
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'sliders/listar'}
                ]
            },
            {
                label: 'Noticias', icon: 'far fa-newspaper',
                items: [
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'noticias/listar'}
                ]
            },
            {
                label: 'Comunicados', icon: 'fas fa-calendar',
                items: [
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'comunicados/listar'}
                ]
            },
            {
                label: 'Vinculos', icon: 'fas fa-external-link-alt',
                items: [
                    {label: 'Ver todos', icon: 'pi pi-fw pi-list', routerLink: 'vinculos/listar'}
                ]
            }
        ]
    }

}
