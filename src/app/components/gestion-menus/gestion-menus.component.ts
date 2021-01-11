import { Component, OnInit } from '@angular/core';
import { MenuNode } from 'src/app/models/menu';
import { MenuNodeService } from 'src/app/services/menunode.service';

@Component({
  selector: 'app-gestion-menus',
  templateUrl: './gestion-menus.component.html',
  styleUrls: ['./gestion-menus.component.scss']
})
export class GestionMenusComponent implements OnInit {

  menuitems: MenuNode[];

  constructor(private menuNodeService: MenuNodeService) { }

  ngOnInit(): void {
    this.getMenuItems();
  }

  getMenuItems(){
    this.menuNodeService.getMenuItems().then(menuitems => this.menuitems = menuitems);
  }

}
