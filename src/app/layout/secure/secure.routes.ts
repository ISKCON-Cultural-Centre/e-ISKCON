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
import { RoleTaskComponent } from './../../secure/organization/role-task.component';
import { DepartmentComponent } from './../../secure/organization/department.component';
import { ChangePasswordComponent } from './../../secure/devotee/change-password.component';
import { DevoteeDetailSearchComponent } from './../../secure/devotee/devotee-detail-search.component';
import { DevoteeLiteSearchComponent } from './../../secure/devotee/devotee-lite-search.component';
import { MyServicesComponent } from '../../secure/my-services/my-services.component';
import { ServiceMasterComponent } from '../../secure/organization/service-master.component';
import { AnnouncementListComponent } from '../../secure/my-services/announcement-list.component';
import { DevoteeGroupComponent } from '../../secure/devotee/devotee-group.component';
import { EventCalendarComponent } from './../../secure/organization/event-calendar.component';
import { EventMasterComponent } from './../../secure/organization/event/event-master.component';
import { DevoteeServiceComponent } from '../../secure/devotee/devotee-service.component';

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
      path: 'myServices',
      data: {
        breadcrumb: 'My Services'
      },
      component: MyServicesComponent, 
      canActivate: [AuthGuard]
    },
    {
      path: 'announcements',
      data: {
        breadcrumb: 'Announcements'
      },
      component: AnnouncementListComponent, 
      canActivate: [AuthGuard]
    },    
    {
      path: 'devotee/manage',
      data: {
        breadcrumb: 'Manage Devotee Data'
      },
      component: DevoteeDetailSearchComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'devotee/view',
      data: {
        breadcrumb: 'Devotee View'
      },
      component: DevoteeLiteSearchComponent,
      canActivate: [AuthGuard]
    },    
    { 
      path: 'devoteeRole',
      data: {
        breadcrumb: 'Roles'
      },
      component: DevoteeRoleComponent, 
      canActivate: [AuthGuard] 
    },  
    { 
      path: 'devotee/service',
      data: {
        breadcrumb: 'Service Interest'
      },
      component: DevoteeServiceComponent, 
      canActivate: [AuthGuard] 
    },      
    { 
      path: 'devotee/group',
      data: {
        breadcrumb: 'Devotee Grouping'
      },
      component: DevoteeGroupComponent, 
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
      path: 'changePassword', 
      data: {
        breadcrumb: 'Change Password'
      },
      component: ChangePasswordComponent 
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
        breadcrumb: 'Task Master'
      },
      component: TaskMasterComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'organization/roleTask', 
      data: {
        breadcrumb: 'Role Task Assignment'
      },
      component: RoleTaskComponent, 
      canActivate: [AuthGuard] 
    },
    { 
      path: 'organization/service', 
      data: {
        breadcrumb: 'Service Master'
      },
      component: ServiceMasterComponent, 
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
    {
      path: 'organization/eventCalendar', 
      data: {
        breadcrumb: 'Calendar'
      },
      component: EventCalendarComponent, 
      canActivate: [AuthGuard] 
    },
    {
      path: 'organization/event/eventMaster', 
      data: {
        breadcrumb: 'Event Master'
      },
      component: EventMasterComponent, 
      canActivate: [AuthGuard] 
    },     
  ];
  