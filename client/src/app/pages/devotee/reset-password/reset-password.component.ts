import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http}  from '@angular/http';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!#$%&’]$/;

import { LoopBackConfig } from '../../../shared/sdk';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  accessToken: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)]);


  constructor(private http: Http, private route: ActivatedRoute) {
    this.accessToken = this.route.snapshot.queryParams['token'];
    // TODO validate the token using API
    if(!this.accessToken) {
      alert('No token found.');
    }
   }

  ngOnInit() {
  }

  resetPassword(password, newPassword) {
    // TODO extend the AppUser service and put this there.
    this.http.post(
      `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/ApiUsers/reset-password?accessToken=${this.accessToken}`,
      {
        password: password.value
      })
      .subscribe((res) => {
        console.log('Rest complete', res);
      });
  }

}
