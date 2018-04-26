import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from '../../material.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { TaskMasterComponent } from './task-master.component';
import { ServiceMasterComponent } from './service-master.component';
import { RoleTaskComponent } from './role-task.component';




@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, 
    SharedComponentsModule
  ],
  declarations: [
    RoleComponent, DepartmentComponent, 
    TaskMasterComponent, ServiceMasterComponent, 
    RoleTaskComponent, 
  ]
})
export class OrganizationModule { }
