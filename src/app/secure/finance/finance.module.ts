import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivablesModule } from './receivables/receivables.module';

@NgModule({
  imports: [
    CommonModule,
    ReceivablesModule,
  ],
  declarations: []
})
export class FinanceModule { }
