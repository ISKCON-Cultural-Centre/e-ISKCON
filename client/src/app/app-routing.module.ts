import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/devotee/login/login.component';
import { ResetPasswordComponent } from './pages/devotee/reset-password/reset-password.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { AuthGuard as AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reset', component: ResetPasswordComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  declarations: []
})
export class AppRoutingModule { }
