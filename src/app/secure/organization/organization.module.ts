import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from '../../material.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { TaskMasterComponent } from './task-master.component';
import { TaskRoleComponent } from './task-role.component';
import { ServiceMasterComponent } from './service-master.component';




@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, 
    SharedComponentsModule
  ],
  declarations: [
    RoleComponent, DepartmentComponent, TaskMasterComponent, TaskRoleComponent, ServiceMasterComponent, 
  ]
})
export class OrganizationModule { }
