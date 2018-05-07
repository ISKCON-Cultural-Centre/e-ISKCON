import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventMasterComponent } from './event-master.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [EventMasterComponent]
})
export class EventModule { }
