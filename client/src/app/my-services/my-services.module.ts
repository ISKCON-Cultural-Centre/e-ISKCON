import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServicesRoutingModule } from './my-services-routing.module';
import { MyServicesComponent } from './my-services.component';

@NgModule({
  imports: [
    CommonModule,
    MyServicesRoutingModule
  ],
  declarations: [MyServicesComponent]
})
export class MyServicesModule { }
