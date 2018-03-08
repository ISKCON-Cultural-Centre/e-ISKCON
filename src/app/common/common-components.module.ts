import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { PhysicalAddressComponent } from './physical-address.component';
import { ElectronicAddressComponent } from './electronic-address.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PhysicalAddressComponent, ElectronicAddressComponent
  ],  
  declarations: [PhysicalAddressComponent, ElectronicAddressComponent]
})
export class CommonComponentsModule { }
