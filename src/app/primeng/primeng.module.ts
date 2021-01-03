import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MegaMenuModule} from 'primeng/megamenu';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from 'primeng/api';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    BrowserAnimationsModule

  ],
  exports:  [
    MegaMenuModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    TieredMenuModule,
    BrowserAnimationsModule
  ]
})
export class PrimengModule { }
