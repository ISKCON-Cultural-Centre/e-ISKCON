import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../../material.module';
import { SharedComponentsModule } from '../../../../shared/components/shared-components.module';
import { FundInstrumentComponent } from './fund-instrument.component';
import { FundInstrumentIssueComponent } from './fund-instrument-issue.component';
import { FundInstrumentReturnComponent } from './fund-instrument-return.component';
import { FundInstrumentPaymentComponent } from './fund-instrument-payment.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, 
    SharedComponentsModule, MaterialModule
  ],
  declarations: [FundInstrumentComponent, 
    FundInstrumentIssueComponent, FundInstrumentReturnComponent, 
    FundInstrumentPaymentComponent]
})
export class FundRaisingModule { }