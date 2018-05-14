import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { SDKToken, DevoteeApi } from '../sdk';
import { LoopBackAuth } from '../sdk';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { User } from './models/user';
import { ChangePassword } from './models/changePassword';
import { Devotee } from '../sdk';
import { NotificationService } from './notification.service';
import { DepartmentApi, Department } from '../sdk';
import {LoopBackFilter} from '../sdk/models/BaseModels';

import { InternalStorage } from '../sdk/storage/storage.swaps';


declare var Object: any;
@Injectable()
export class AuthService extends LoopBackAuth implements OnInit, OnDestroy {
  loopBackFilter: LoopBackFilter = {};
  one$ = new Subscription();
  two$ = new Subscription();
  // Create a stream of logged in status to communicate throughout app
  loggedIn$ = new BehaviorSubject<Boolean>(false);
  userId$ = new BehaviorSubject<String>(null);
  loggedIn: Boolean = false;
  departments = new BehaviorSubject<Department[]>([]);
  public devoteeName = new BehaviorSubject<string>('');

    constructor(
        internalStorage: InternalStorage, 
        private router: Router,
        private devoteeApi: DevoteeApi,
        private departmentApi: DepartmentApi,
        private notificationService: NotificationService
    )
    {
        super(internalStorage);
        if (this.devoteeApi.isAuthenticated()) {
          this.setLoggedIn(true);
          this.decode(this.getCurrentUserData());
          this.userId$.next(this.getCurrentUserData().userId);
        }  
    }

    ngOnInit() {

    }

    private decode(devotee: Devotee) {
        this.devoteeName.next(devotee.spiritualName ? devotee.spiritualName : devotee.legalName);
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
    this.one$ = this.devoteeApi.login({ username: user.userName, password: user.password }, 'user')
          .subscribe((token: SDKToken) => {
            this.setRememberMe(true);
            this.setToken(token);
            this.setUser(token.user);
            this.save();
            this.userId$.next(token.userId);
            this.setLoggedIn(true);
            this.loggedIn = true;
            this.decode(token.user);
            this.notificationService.notificationSubject.next('Login Successful');
            this.router.navigate(['dashboard']);
          }, err => {
            this.setLoggedIn(false);
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

      loadDepartments(currentUserId: string) {
        this.loopBackFilter.where = {'departmentLeaderDevoteeId': currentUserId};
        this.two$ = this.departmentApi.find<Department>(this.loopBackFilter).subscribe(
          departments => {
            this.departments.next(departments);
          }
        )
      }

      get getMyDepartments() {
        return this.departments.asObservable();
    }

      ngOnDestroy(){
        this.one$.unsubscribe();
        this.two$.unsubscribe();
      }
      
}


