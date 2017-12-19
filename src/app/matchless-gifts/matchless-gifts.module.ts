import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchlessGiftsRoutingModule } from './matchless-gifts-routing.module';
import { BookMarathonModule } from './book-marathon/book-marathon.module';

@NgModule({
  imports: [
    CommonModule,
    MatchlessGiftsRoutingModule,
    BookMarathonModule
  ],
  declarations: []
})
export class MatchlessGiftsModule { }
