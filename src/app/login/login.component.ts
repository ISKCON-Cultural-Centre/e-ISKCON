import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { SDKToken, DevoteeApi } from '../shared/sdk';
import { AuthService } from '../shared/services/auth.service';

import { NotificationService } from '../shared/services/notification.service';


const USERNAME_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!#$%&’]$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean; 

  spinner: Boolean = false;

  private state: String = 'login';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService) {
  }

  userNameFormControl = new FormControl('', [
    Validators.required]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)]);

  ngOnInit() { 
    this.form = this.fb.group({
      userName: ['', this.userNameFormControl],
      password: ['', this.passwordFormControl]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }


  onResetPassword() {
    this.router.navigate(['resetPassword']);
  }

  onSubmit() {

    if (this.form.valid) {
      this.spinner = true;
      this.authService.login(this.form.value);
      }
      this.formSubmitAttempt = true;
    }
}
