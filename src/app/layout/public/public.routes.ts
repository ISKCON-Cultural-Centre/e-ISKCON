import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../public/login/login.component';
import { ResetPasswordComponent } from './../../public/login/reset-password.component';
import { PageNotFoundComponent } from './../../pageNotFound.component';
import { AuthGuard as AuthGuard } from './../../shared/services/auth.guard';
import { RegisterComponent } from './../../public/login/register/register.component';
import { ChangePasswordComponent } from './../../public/login/change-password.component';



export const PUBLIC_ROUTES: Routes = [
    {
      path: 'register',
      data: {
        breadcrumb: 'Register'
      },
      component: RegisterComponent
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
    { 
      path:
      'resetPassword',
      data: {
        breadcrumb: 'Reset Password'
      }, 
      component: ResetPasswordComponent 
    },
  ];