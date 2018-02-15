import { Injectable } from '@angular/core';
import { SDKToken, DevoteeApi } from '../sdk';
import { LoopBackAuth } from '../sdk';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from './models/user';
import { ChangePassword } from './models/changePassword';
import { Devotee } from '../sdk';
import { NotificationService } from './notification.service';

import { InternalStorage } from '../sdk/storage/storage.swaps';


declare var Object: any;
@Injectable()
export class AuthService extends LoopBackAuth {

  // Create a stream of logged in status to communicate throughout app
  loggedIn$ = new BehaviorSubject<Boolean>(false);
  loggedIn: Boolean = false;

  public devoteeName = new BehaviorSubject<string>('');

    constructor(
        internalStorage: InternalStorage, 
        private router: Router,
        private devoteeApi: DevoteeApi,
        private notificationService: NotificationService
    )
    {
        super(internalStorage);
        if (this.devoteeApi.isAuthenticated()) {
            this.setLoggedIn(true);
            this.decode(this.getCurrentUserData());
        }
    }

    private decode(devotee: Devotee) {
        this.devoteeName.next(devotee.spiritualName);
    }

    get isLoggedIn() {
        return this.loggedIn$.asObservable(); 
      }

    get getDevoteeName() {
        return this.devoteeName.asObservable();
    }


    setLoggedIn(value: boolean) {
        // Update login status subject
        this.loggedIn$.next(value);
      }

    login(user: User): any {
        this.devoteeApi.login({ username: user.userName, password: user.password }, 'user')
          .subscribe((token: SDKToken) => {
            this.router.navigate(['dashboard']);
            this.setRememberMe(true);
            this.setToken(token);
            this.save();
            this.setLoggedIn(true);
            this.loggedIn = true;
            this.decode(token.user);
            this.notificationService.notificationSubject.next('Login Successful');

          }, err => {
            this.notificationService.notificationSubject.next('Login Failed');
          });
      }
  

      logout() {
        this.devoteeApi.logout().subscribe((response) => {
        // Clear Token and other local storage
        this.clear();
        this.notificationService.notificationSubject.next('Logout Successful');
        this.router.navigate(['/login']);
        this.setLoggedIn(false);
        });
      }

     resetPassword() {
        this.devoteeApi.resetPassword({});
      }

      changePassword(changePassword: ChangePassword) {
        return this.devoteeApi.changePassword(changePassword.oldPassword, changePassword.newPassword );
      }
}
