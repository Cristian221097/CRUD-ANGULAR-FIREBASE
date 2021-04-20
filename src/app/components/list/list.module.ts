import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FormsModule } from '@angular/forms';
import { BusquedaPipe } from 'src/app/pipes/busqueda.pipe';


@NgModule({
  declarations: [
    ListComponent,
    BusquedaPipe
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule
  ]
})
export class ListModule { }
