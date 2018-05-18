import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from '../../material.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
import { TaskMasterComponent } from './task-master.component';
import { ServiceMasterComponent } from './service-master.component';
import { RoleTaskComponent } from './role-task.component';
import { EventCalendarComponent } from './event-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EventService } from './event-calendar.service';
import { EventModule } from './event/event.module';
import { ServiceCalendarEntryComponent} from '../my-services/service-calendar-entry.component';
import { AuthService } from '../../shared/services/index';


@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, 
    SharedComponentsModule, FullCalendarModule, EventModule
  ],
  declarations: [
    RoleComponent, DepartmentComponent, 
    TaskMasterComponent, ServiceMasterComponent, 
    RoleTaskComponent, EventCalendarComponent, 
  ],
  providers: [ EventService, ],
  entryComponents: [
    ServiceCalendarEntryComponent
  ]
})
export class OrganizationModule { }
