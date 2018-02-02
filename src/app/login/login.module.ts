import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { LoginComponent } from './login.component';
import { ChangePasswordComponent } from './change-password.component';
import { ResetPasswordComponent } from './reset-password.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [LoginComponent, ChangePasswordComponent, ResetPasswordComponent, RegisterComponent]
})
export class LoginModule { }
