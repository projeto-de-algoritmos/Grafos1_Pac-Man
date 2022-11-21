import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
