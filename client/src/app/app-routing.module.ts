import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './login/reset-password.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound.component';


import { AuthGuard as AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }