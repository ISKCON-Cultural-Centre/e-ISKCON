import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MyMessagesRoutingModule } from './my-messages-routing.module';
import { MyMessagesComponent } from './my-messages.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyMessagesRoutingModule,
  ],
  declarations: [MyMessagesComponent]
})
export class MyMessagesModule { }
