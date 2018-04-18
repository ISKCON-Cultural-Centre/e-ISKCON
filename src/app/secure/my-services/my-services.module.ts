import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { MyServicesRoutingModule } from './my-services-routing.module';
import { MyServicesComponent } from './my-services.component';
import { ServiceCalendarEntryComponent } from './service-calendar-entry.component';
import { ServiceAnnouncementComponent } from './service-announcement.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MyServicesRoutingModule
  ],
  declarations: [MyServicesComponent, ServiceCalendarEntryComponent, ServiceAnnouncementComponent]
})
export class MyServicesModule { }
