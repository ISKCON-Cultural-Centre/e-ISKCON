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

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'devotee', component: DevoteeComponent, canActivate: [AuthGuard] },
  { path: 'devoteeRole', component: DevoteeRoleComponent, canActivate: [AuthGuard] },  
  { path: 'profile', component: DevoteeProfileComponent, canActivate: [AuthGuard] },  
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'lookupMaster', component: LookupComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
