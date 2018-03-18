import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from '../../public/login/login.component';
import { ResetPasswordComponent } from './../../public/login/reset-password.component';
import { PageNotFoundComponent } from './../../pageNotFound.component';
import { AuthGuard as AuthGuard } from './../../shared/services/auth.guard';
import { RegisterComponent } from './../../public/login/register.component';



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
      path:
      'resetPassword',
      data: {
        breadcrumb: 'Reset Password'
      }, 
      component: ResetPasswordComponent 
    },
  ];