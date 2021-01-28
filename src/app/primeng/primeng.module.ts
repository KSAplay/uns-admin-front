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
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {ProgressBarModule} from 'primeng/progressbar';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {TreeTableModule} from 'primeng/treetable';
import {InputMaskModule} from 'primeng/inputmask';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


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
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    InputTextareaModule,
    CalendarModule,
    TreeTableModule,
    InputMaskModule,
    DynamicDialogModule
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
    MultiSelectModule,
    DropdownModule,
    SliderModule,
    ProgressBarModule,
    ToastModule,
    DialogModule,
    InputTextareaModule,
    CalendarModule,
    TreeTableModule,
    InputMaskModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
