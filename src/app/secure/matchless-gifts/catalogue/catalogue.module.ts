import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MaterialModule
  ],
  declarations: [CatalogueComponent]
})
export class CatalogueModule { }
