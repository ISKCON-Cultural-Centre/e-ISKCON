import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { SDKToken, UserApi } from '../../../sdk';
import { AuthService } from '../../../services/auth.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!#$%&’]$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private state: String = 'login';

  constructor(
    private userApi: UserApi,
    private authService: AuthService,
    private router: Router) {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)]);

  ngOnInit() {}

  setState(state: string) {
    this.state = state;
  }

  login(email, password) {
    this.userApi.login({ email: email.value, password: password.value })
    .subscribe((token: SDKToken) => {
      this.authService.setUser(token);
      this.router.navigate(['/']);
    }, err => {
      alert(err && err.message ? err.message : 'Login failed!');
      password.value = '';
    });
  }

  signup(username, email, password, passwordConfirm, type) {
    if(password.value !== passwordConfirm.value) {
      return alert('Passwords must match!');
    }

    this.userApi.create({
      username: username.value,
      email: email.value,
      password: password.value,
      type: type.value
    }).subscribe((res) => {
      console.log('created.', res);
      if(res.username) {
        this.login(email, password);
      }
    });
  }

  resetPassword(email) {
    this.userApi.resetPassword({
      email: email.value
    }).subscribe((res) => {
      console.log('Restted!', res);
    })
  }

}
