import { Component, OnInit } from '@angular/core';
import { SelectItemGroup, TreeNode } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Menu } from 'src/app/models/menu';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MenuService } from 'src/app/services/menu.service';
import { OrdenarMenuComponent } from './ordenar-menu/ordenar-menu.component';

@Component({
  selector: 'app-gestion-menus',
  templateUrl: './gestion-menus.component.html',
  styleUrls: ['./gestion-menus.component.scss']
})
export class GestionMenusComponent implements OnInit {

  items: TreeNode[];
  loading: boolean;

  displayModalCrearMenu: boolean;

  id_menu: number;

  menuNuevo: Menu;




  //MODAL
  selectedNivel: number;
  opcionesNivel: any[];
  
  id_menu_selected: number;

  menusNivel1: Menu[];

  menusNivel2: SelectItemGroup[];

  constructor(private mensajeService: MensajeService, private menuService: MenuService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.loading = true;



    this.opcionesNivel = [
      {name: 'Sin padre', code: 0},
      {name: 'Nivel 1', code: 1},
      {name: 'Nivel 2', code: 2}
    ];

  }


  loadNodes() {
    this.loading = true;
    this.menuService.getMenuItems(0).then(menuitems => {


      this.loading = false;
      this.items = [];
      let node;

      for (let i = 0; i < menuitems.length; i++) {

        node = {

          data: {
            nombre: menuitems[i]['nombre'],
            orden: menuitems[i]['orden'],
            ruta: menuitems[i]['ruta'],
            visible: menuitems[i]['visible'],
            id_menu: menuitems[i]['id_menu'],
            id_parent: menuitems[i]['id_parent'],
            numero_hijos: menuitems[i]['numero_hijos']
          },
          leaf: (menuitems[i]['numero_hijos'] > 0) ? false : true

        };
        this.items.push(node);
      }

    });

  }


  onNodeExpand(event) {
    this.loading = true;
    let id_menu = event.node.data.id_menu;

    this.menuService.getMenuItems(id_menu).then(menuitems => {
      this.loading = false;
      const node = event.node;
      let childs = [];
      for (let i = 0; i < menuitems.length; i++) {
        let child =

        {
          data: {
            nombre: menuitems[i]['nombre'],
            orden: menuitems[i]['orden'],
            ruta: menuitems[i]['ruta'],
            visible: menuitems[i]['visible'],
            id_menu: menuitems[i]['id_menu'],
            id_parent: menuitems[i]['id_parent'],
            numero_hijos: menuitems[i]['numero_hijos']
          },

          leaf: (menuitems[i]['numero_hijos'] > 0) ? false : true
        }

        childs.push(child);

      }
      node.children = childs;

      this.items = [...this.items];

    });


  }


  cambiovisibilidad(e, id_menu: number) {
    this.loading = true;
    var isVisible = e.checked;
    var visibilidad = isVisible ? 'activa' : 'inactiva';

    this.menuService.setVisibilidad(id_menu, isVisible).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió la visibilidad a ' + visibilidad + ' de manera correcta');
        this.loading = false;
        this.loadNodes();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar la visibilidad');
      this.loading = false;
      this.loadNodes();
    }
    );
  }

  eliminarMenu(id: number) {
    this.id_menu = id;
    this.mensajeService.clear('toast-menu');
    this.mensajeService.confirmarAccion('toast-menu', '¿Estás seguro de que quieres eliminar el menú?', 'info');
  }


  confirmarEliminarMenu() {
    this.loading = true;
    this.mensajeService.clear('toast-menu');
    this.menuService.eliminarMenu(this.id_menu).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se eliminó el menú de manera correcta');
        this.loading = false;
        this.id_menu = null;
        this.loadNodes();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró eliminar el menú');
      this.loading = false;
      this.id_menu = null;
      this.loadNodes();
    }
    );
  }

  rechazarEliminarMenu() {
    this.id_menu = null;
    this.mensajeService.clear('toast-menu');
  }


  cambioTexto(id_menu: number, nombreNuevo: string) {
    this.loading = true;
    this.mensajeService.clear('toast-menu');
    this.menuService.cambiarTexto(id_menu, nombreNuevo).subscribe(data => {
      if (data) {
        this.mensajeService.mensajeCorrecto('Se cambió el nonbre de manera correcta');
        this.loading = false;
        this.loadNodes();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró cambiar el nombre');
      this.loading = false;
      this.loadNodes();
    }
    );
  }

  abrirModalOrdenar(id_par: number) {
    const ref = this.dialogService.open(OrdenarMenuComponent, {
      data: {
        id_parent: id_par
      },
      header: 'Arrastra para ordenar',
      width: '60%'
    });

    ref.onClose.subscribe((data: boolean) => {
      if (data) {
        if (data == true) {
          this.mensajeService.mensajeCorrecto('Se cambió el orden de manera correcta');
        } else {
          this.mensajeService.mensajeIncorrecto('No se logró cambiar el orden');
        }

      }
    });

  }

  crearMenu(){
    var id_parent = this.selectedNivel == 0 ? null : this.id_menu_selected;
    this.menuService.createMenu(this.menuNuevo, id_parent).subscribe(data =>{
      if (data) {
        this.mensajeService.mensajeCorrecto('Se guardó la noticia de manera correcta');
     
        this.displayModalCrearMenu=false;
        this.loadNodes();
      }
    }, (err) => {
      this.mensajeService.mensajeIncorrecto('No se logró guardar la noticia');
      this.displayModalCrearMenu=false;
      this.loadNodes();
    })
  }

  abrirModalCrearMenu(){
    this.menuNuevo = new Menu;
    this.displayModalCrearMenu=true;

    this.selectedNivel = null;
    this.id_menu_selected=null;
  
    this.cargarMenusNivel1();
  
    this.cargarMenusNivel2();
  }

  cargarMenusNivel2(){
   
    
    this.menuService.getMenus().then(data=>{
      this.menusNivel2=[];

      this.menusNivel2= data.map(item=>({
        label: item.nombre, 
        value: item.id_menu,
        items: item.children.map(ite => ({
          label:ite.nombre,
          value: ite.id_menu

        }))
      }))

    });
  }


  cargarMenusNivel1(){

    this.menusNivel1= [];
    this.menuService.getMenuItems(0).then(data=>{
      this.menusNivel1 = data;
    });

  }

  cerrarModalCrearMenu(){
    this.displayModalCrearMenu=false;
  }

}
