import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventMasterComponent } from './event-master.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../../../shared/components/shared-components.module';

import { QRCodeModule } from 'angularx-qrcode';
import { EventPlannerComponent } from './event-planner.component';
import { DevoteeModule } from '../../devotee/devotee.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule,
    FormsModule, ReactiveFormsModule,
    QRCodeModule,
    DevoteeModule
  ],
  declarations: [EventMasterComponent, EventPlannerComponent]
})
export class EventModule { }
