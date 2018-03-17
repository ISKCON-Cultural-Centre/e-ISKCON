import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { ResetPasswordComponent } from './public/login/reset-password.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { DevoteeComponent } from './secure/devotee/devotee.component';
import { DevoteeProfileComponent } from './secure/devotee/devotee-profile.component';
import { AuthGuard as AuthGuard } from './shared/services/auth.guard';
import { RegisterComponent } from './public/login/register/register.component';
import { ChangePasswordComponent } from './public/login/change-password.component';
import { CatalogueComponent } from './secure/matchless-gifts/catalogue/catalogue.component';
import { LookupComponent } from './secure/lookup/lookup.component';
import { DevoteeRoleComponent } from './secure/devotee/devotee-role.component';
import { RoleComponent } from './secure/organization/role.component';
import { TaskMasterComponent } from './secure/organization/task-master.component';
import { DepartmentComponent } from './secure/organization/department.component';
import { SecureComponent, SECURE_ROUTES } from './layout/secure';
import { PublicComponent, PUBLIC_ROUTES } from './layout/public';

const routes: Routes = [
  { 
    path: '', 
    data: {
      breadcrumb: 'Home'
    },
    redirectTo: 'dashboard', pathMatch: 'full', 
    canActivate: [AuthGuard] 
  },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
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
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
