import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';

import { PhysicalAddressComponent } from './physical-address.component';
import { ElectronicAddressComponent } from './electronic-address.component';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    PhysicalAddressComponent, ElectronicAddressComponent, BreadcrumbComponent
  ],  
  declarations: [PhysicalAddressComponent, ElectronicAddressComponent, BreadcrumbComponent]
})
export class CommonComponentsModule { }
