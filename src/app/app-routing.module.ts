import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './login/reset-password.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevoteeComponent } from './devotee/devotee.component';
import { DevoteeProfileComponent } from './devotee/devotee-profile.component';
import { AuthGuard as AuthGuard } from './shared/services/auth.guard';
import { RegisterComponent } from './login/register/register.component';
import { ChangePasswordComponent } from './login/change-password.component';
import { CatalogueComponent } from './matchless-gifts/catalogue/catalogue.component';
import { LookupComponent } from './lookup/lookup.component';
import { DevoteeRoleComponent } from './devotee/devotee-role.component';
import { RoleComponent } from './organization/role.component';
import { TaskMasterComponent } from './organization/task-master.component';
import { DepartmentComponent } from './organization/department.component';

const routes: Routes = [
  {
    path: 'register',
    data: {
      breadcrumb: 'Register'
    },
    component: RegisterComponent
  },
  { 
    path: 'dashboard', 
    data: {
      breadcrumb: 'Dashboard'
    },
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'login', 
    data: {
      breadcrumb: 'Login'
    },
    component: LoginComponent 
  },
  { 
    path: 'changePassword', 
    data: {
      breadcrumb: 'Change Password'
    },
    component: ChangePasswordComponent 
  },
  { path: 
    'resetPassword',
    data: {
      breadcrumb: 'Reset Password'
    }, 
    component: ResetPasswordComponent 
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
    path: 'reset', 
    data: {
      breadcrumb: 'Reset Password'
    },
    component: ResetPasswordComponent 
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
  { 
    path: '', 
    data: {
      breadcrumb: 'Home'
    },
    redirectTo: 'dashboard', pathMatch: 'full', 
    canActivate: [AuthGuard] 
  },
  { 
    path: '**', 
    data: {
      breadcrumb: 'Not Found'
    },
    component: PageNotFoundComponent 
  }
];



@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
