import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { MyServicesRoutingModule } from './my-services-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { MyServicesComponent } from './my-services.component';
import { ServiceCalendarEntryComponent } from './service-calendar-entry.component';
import { ServiceAnnouncementComponent } from './service-announcement.component';
import { AnnouncementListComponent } from './announcement-list.component';
import { AnnouncementListService } from './announcement-list-service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedComponentsModule,
    MyServicesRoutingModule,
  ],
  declarations: [MyServicesComponent, ServiceCalendarEntryComponent, ServiceAnnouncementComponent, AnnouncementListComponent],
  providers: [
    AnnouncementListService,
  ],
})
export class MyServicesModule { }
