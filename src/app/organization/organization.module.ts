import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoleComponent } from './role.component';
import { DepartmentRoleComponent } from './department-role.component';
import { DepartmentComponent } from './department.component';
import { MaterialModule } from '../material.module';
// import { SharedComponentsModule } from '../shared/components/shared-components.module'
import { InlineEditComponent } from '../shared/components/inline-edit/inline-edit.component';




@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [RoleComponent, DepartmentRoleComponent, DepartmentComponent, InlineEditComponent]
})
export class OrganizationModule { }
