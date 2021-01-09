import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    TieredMenuModule,
    SplitButtonModule,
    TableModule,
    ToggleButtonModule,
    FormsModule


  ],
  exports:  [
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    TieredMenuModule,
    SplitButtonModule,
    TableModule,
    ToggleButtonModule,
    FormsModule
  ]
})
export class PrimengModule { }
