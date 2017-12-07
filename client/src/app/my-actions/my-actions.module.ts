import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyActionsRoutingModule } from './my-actions-routing.module';
import { MyActionsComponent } from './my-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MyActionsRoutingModule
  ],
  declarations: [MyActionsComponent]
})
export class MyActionsModule { }
