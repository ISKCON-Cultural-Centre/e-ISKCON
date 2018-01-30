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
  isLoggedIn: boolean;
  isLoggedIn$: Observable <boolean>;
  devoteeName: any;


  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private myServicesService: MyServicesService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn
    .subscribe(
      isLoggedIn => {
        this.devoteeName = this.authService.getCurrentUserData();
        this.isLoggedIn = isLoggedIn;
        if (isLoggedIn.valueOf()) {
          this.devoteeName = this.authService.getCurrentUserData();
          this.getAuthorizedDepartments();
      }
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
