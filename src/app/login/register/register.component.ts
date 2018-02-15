import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { SDKToken, DevoteeApi } from '../../shared/sdk';
const USERNAME_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!#$%&’]$/;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  state: String = 'login';
  model: any = {};
  loading = false;

  userNameFormControl = new FormControl('', [
    Validators.required]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)]);
  constructor(private devoteeApi: DevoteeApi,
    private router: Router) { }

  ngOnInit() {
  }
  register() {
    // registration logic
  }
}
