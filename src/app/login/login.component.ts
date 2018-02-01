import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { SDKToken, DevoteeApi } from '../shared/sdk';
import { AuthService } from '../shared/services/auth.service';

import { GlobalEventsManager } from '../shared/services/globalEventsManager.service';

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
    // private devoteeApi: DevoteeApi,
    private authService: AuthService,
    // private router: Router,
    private globalEventsManager: GlobalEventsManager) {
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

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    this.spinner = true;
    if (this.form.valid) {
      this.authService.login(this.form.value);
    }
    this.formSubmitAttempt = true; 
  }

/* 
  setState(state: string) {
    this.state = state;
  } */


/*   signup(username, email, password, passwordConfirm, type) {
    if (password.value !== passwordConfirm.value) {
      return alert('Passwords must match!');
    }

    this.devoteeApi.create({
      username: username.value,
      email: email.value,
      password: password.value,
      type: type.value
    }).subscribe((res) => {
      console.log('created.', res);
      if (res.username) {
        this.login(email, password);
      }
    });
  }

  resetPassword(email) {
    this.devoteeApi.resetPassword({
      email: email.value
    }).subscribe((res) => {
      console.log('Restted!', res);
    });
  }
  redirectToRegister() {
    this.router.navigate(['./register']);
  } */

}
