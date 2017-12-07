import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestBasketRoutingModule } from './request-basket-routing.module';
import { RequestBasketComponent } from './request-basket.component';

@NgModule({
  imports: [
    CommonModule,
    RequestBasketRoutingModule
  ],
  declarations: [RequestBasketComponent]
})
export class RequestBasketModule { }
