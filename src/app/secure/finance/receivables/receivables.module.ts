import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRaisingModule } from './fund-raising/fund-raising.module';


@NgModule({
  imports: [
    CommonModule,
    FundRaisingModule,
  ],
  declarations: []
})
export class ReceivablesModule { }
