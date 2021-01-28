import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Menu } from 'src/app/models/menu';
import { MensajeService } from 'src/app/services/mensaje.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-ordenar-menu',
  templateUrl: './ordenar-menu.component.html',
  styleUrls: ['./ordenar-menu.component.scss']
})
export class OrdenarMenuComponent implements OnInit {

  loading:boolean;
  menus: Menu[];

  constructor(private mensajeService: MensajeService,private menuService: MenuService, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    console.log(this.config.data.id_parent);
    this.loading=true;
    this.cargarMenus();
  }

  cargarMenus(){
    this.loading=true;
    const id_parent=this.config.data.id_parent == null ? 0 : this.config.data.id_parent;
    this.menuService.getMenuItems(id_parent).then(menuitems => {
      this.menus=menuitems;
      this.loading=false;
    });
  }


  cambiarOrden(){
    this.loading = true;
    this.menus.forEach((value,index)=>{
      this.menuService.setPosicion(value.id_menu,index).subscribe(data =>{
        if(data){
          this.mensajeService.mensajeCorrecto('Se cambió el orden de manera correcta');
        }
      }, (err)=>{
          this.mensajeService.mensajeIncorrecto('No se logró cambiar el orden');
      });
    });

    setTimeout(() => {
      this.cargarMenus();
      this.loading = false;
     }, 500);

  }


  

}
