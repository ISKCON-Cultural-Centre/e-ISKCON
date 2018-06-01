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
import { EventsService } from './events.service';
import { OrganizationDataSource } from './organization-data-source';
import { OrganizationService } from './organization.service';
import { OrganizationChildrenService } from './organization-children.service';
import { OrganizationTreeService } from './organization-tree.service';
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
  providers: [ EventsService, OrganizationService, OrganizationChildrenService, OrganizationTreeService,
  ],
  entryComponents: [
    ServiceCalendarEntryComponent
  ]
})
export class OrganizationModule { }
