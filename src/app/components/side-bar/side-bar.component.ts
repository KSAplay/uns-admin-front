import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

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
                label: 'Secciones', icon: 'pi pi-fw pi-list',
                items: [
                        {label: 'Agregar nueva', icon:' pi pi-fw pi-plus'},
                        {label: 'Listar'}
                ]
            },
            {
                label: 'Noticias', icon: 'pi pi-fw pi-globe',
                items: [
                        {label: 'Agregar nueva'},
                        {label: 'Listar'}
                ]
            },
            {
                label: 'Eventos', icon: 'pi pi-fw pi-users',
                items: [
                        {label: 'Agregar nueva'},
                        {label: 'Listar'}
                ]
            },
            {
                label: 'Sliders', icon: 'pi pi-fw pi-users',
                items: [
                        {label: 'Agregar nueva'},
                        {label: 'Listar'}
                ]
            },
            {
                label: 'Enlaces', icon: 'pi pi-fw pi-users',
                items: [
                        {label: 'Agregar nueva'},
                        {label: 'Listar'}
                ]
            },
            {
                label: 'Menus', icon: 'pi pi-fw pi-users',
               
            },
        ]
    }

}
