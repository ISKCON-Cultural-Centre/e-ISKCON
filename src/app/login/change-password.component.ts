import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { SDKToken, DevoteeApi } from '../shared/sdk';
import { AuthService } from '../shared/services/auth.service';

import { NotificationService } from '../shared/services/notification.service';
import { GlobalEventsManager } from '../shared/services/globalEventsManager.service';

const USERNAME_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9!#$%&’]$/;

@Component({
  selector: 'app-changepassword',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean; 
  spinner: Boolean = false;
  private state: String = 'login';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService) { }


  oldPasswordFormControl = new FormControl('', [
    Validators.required]);

  newPasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PASSWORD_REGEX)]);

    confirmNewPasswordFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(PASSWORD_REGEX)]);    

  ngOnInit() { 
    this.form = this.fb.group({
      oldPassword: ['', this.oldPasswordFormControl],
      newPassword: ['', this.newPasswordFormControl],
      confirmNewPassword: ['', this.confirmNewPasswordFormControl]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.spinner = true;
      this.authService.changePassword(this.form.value);

      this.authService.changePassword(this.form.value)
      .subscribe((response: any) => {
          console.log(response);
          this.notificationService.notificationSubject.next('Password Changed Successfully. Login with your new password');
          this.authService.logout();
          this.router.navigate(['/']);
          return response;
        }, err => {
          this.spinner = false;
          this.notificationService.notificationSubject.next('Password could not be changed');
          this.form.reset();
        });
    }
    this.formSubmitAttempt = true;
  }
}