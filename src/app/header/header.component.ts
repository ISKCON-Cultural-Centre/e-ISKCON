import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { AuthService } from '../shared/services/auth.service';
import { Department } from '../shared/sdk/models/Department';
import { DevoteeApi, Devotee } from '../shared/sdk';

import { MyDepartment } from '../shared/services/models/myDepartment';
import { MyServicesService } from '../shared/services/myServices.service';
import { NotificationService } from '../shared/services/notification.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDepartments: Department[];
  isLoggedIn: Boolean;
  isLoggedIn$: Observable <Boolean>;
  devoteeName$: Observable <String>;
  username: String = '';

  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private myServicesService: MyServicesService) {
      if (this.authService.loggedIn) {
        this.authService.devoteeName.next(this.authService.getCurrentUserData());
      }
     }

  ngOnInit() {
    this.devoteeName$ = this.authService.getDevoteeName;
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn
    .subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
          this.username = this.authService.getCurrentUserData();
          this.getAuthorizedDepartments();
      } else {}
    });
  }

  onLogout() {
    this.authService.logout();
  }
 
  getAuthorizedDepartments(): void {
    this.myServicesService.getAuthorizedDepartments()
      .subscribe(myDepartments => {(this.myDepartments = myDepartments);
        this.notificationService.notificationSubject.next('authorizedService: fetched authorized services');
      });
  }

}
