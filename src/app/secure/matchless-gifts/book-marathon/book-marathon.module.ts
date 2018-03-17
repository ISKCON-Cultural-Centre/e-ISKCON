import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookMarathonRoutingModule } from './book-marathon-routing.module';
import { RequestBasketModule } from './request-basket/request-basket.module';

@NgModule({
  imports: [
    CommonModule,
    BookMarathonRoutingModule,
    RequestBasketModule,    
  ],
  declarations: []
})
export class BookMarathonModule { }
