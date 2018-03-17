import { NgModule } from '@angular/core';
import { Routes, RouterLink } from '@angular/router';
import { PageNotFoundComponent } from './../../pageNotFound.component';
import { DashboardComponent } from './../../secure/dashboard/dashboard.component';
import { DevoteeComponent } from './../../secure/devotee/devotee.component';
import { DevoteeProfileComponent } from './../../secure/devotee/devotee-profile.component';
import { AuthGuard as AuthGuard } from './../../shared/services/auth.guard';
import { CatalogueComponent } from './../../secure/matchless-gifts/catalogue/catalogue.component';
import { LookupComponent } from './../../secure/lookup/lookup.component';
import { DevoteeRoleComponent } from './../../secure/devotee/devotee-role.component';
import { RoleComponent } from './../../secure/organization/role.component';
import { TaskMasterComponent } from './../../secure/organization/task-master.component';
import { DepartmentComponent } from './../../secure/organization/department.component';


export const SECURE_ROUTES: Routes = [
    { 
      path: 'dashboard', 
      data: {
        breadcrumb: 'Dashboard'
      },
      component: DashboardComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'devotee', 
      data: {
        breadcrumb: 'Devotee'
      },
      component: DevoteeComponent, 
      canActivate: [AuthGuard] },
    { 
      path: 'devoteeRole',
      data: {
        breadcrumb: 'Roles'
      },
      component: DevoteeRoleComponent, 
      canActivate: [AuthGuard] 
    },  
    { 
      path: 'profile',
      data: {
        breadcrumb: 'My Profile'
      }, 
      component: DevoteeProfileComponent, 
      canActivate: [AuthGuard] 
    },  
    { 
      path: 'lookupMaster', 
      data: {
        breadcrumb: 'Lookup Maintenance'
      },
      component: LookupComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'organization/role', 
      data: {
        breadcrumb: 'Role'
      },
      component: RoleComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'organization/task', 
      data: {
        breadcrumb: 'Task'
      },
      component: TaskMasterComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'organization/department', 
      data: {
        breadcrumb: 'Department'
      },
      component: DepartmentComponent, 
      canActivate: [AuthGuard] 
    },
  ];
  