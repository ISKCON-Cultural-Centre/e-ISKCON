import { Injectable } from '@angular/core';
import { SDKToken, DevoteeApi } from '../sdk';
import { LoopBackAuth } from '../sdk';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './models/user';
import { NotificationService } from './notification.service';

import { InternalStorage } from '../sdk/storage/storage.swaps';


declare var Object: any;
@Injectable()
export class AuthService extends LoopBackAuth {

    private loggedIn = new BehaviorSubject<boolean>(false);

    private sessiontoken: SDKToken = new SDKToken();
    private remembeMe: Boolean = true;

    constructor(
        internalStorage: InternalStorage, 
        private router: Router,
        private devoteeApi: DevoteeApi,
        private notificationService: NotificationService
    )
    {
        super(internalStorage);
        this.loadFromSession();
        if (devoteeApi.isAuthenticated()) {
            this.loggedIn.next(true);
        }
    }


    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }


    login(user: User) {
        this.devoteeApi.login({ username: user.userName, password: user.password })
          .subscribe((token: SDKToken) => {
            super.setToken(token);
            this.loggedIn.next(true);
            this.notificationService.notificationSubject.next('Login Successful');
            this.router.navigate(['/']);
          }, err => {
            this.notificationService.notificationSubject.next('Login Failed');
            user.password = '';
          });
      }


      logout() {
        this.devoteeApi.logout().subscribe((response) => {
          // Clear Token and other local storage
          this.clearFromSession();
          this.loggedIn.next(false);
          this.router.navigate(['/login']);
        });
      }


    clear(): void {
        super.clear();
        this.clearFromSession();
    }

    saveToSession(): void {
        this.remembeMe = false;
        this.persist('id', super.getAccessTokenId());
        this.persist('userId', super.getCurrentUserId);
        this.persist('user', super.getCurrentUserData());
    }

    loadFromSession(): void {
        this.sessiontoken.id = sessionStorage.getItem('id');
        this.sessiontoken.userId = sessionStorage.getItem('userId');
        this.sessiontoken.user = sessionStorage.getItem('user');
        if (this.sessiontoken.id && this.sessiontoken.user && this.sessiontoken.userId) {
            super.setUser(this.sessiontoken);
        }
    }

    clearFromSession(): void {
        Object.keys(this.sessiontoken).forEach(prop => sessionStorage.removeItem(prop));
        this.sessiontoken = new SDKToken();
    }

    persist(prop: string, value: any): void {
        if (this.remembeMe) {
            super.persist(prop, value);
        } else {
            sessionStorage.setItem(prop, JSON.stringify(value));
        }
    }
}
