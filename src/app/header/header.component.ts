import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/services/auth.service';

import { Department } from '../shared/sdk/models/Department';
import { MyServicesService } from '../shared/services/myServices.service';
import { NotificationService } from '../shared/services/notification.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDepartments: Department[];
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, 
    private notificationService: NotificationService,
    private myServicesService: MyServicesService) { }

  ngOnInit() {

    this.isLoggedIn$ = this.authService.isLoggedIn;

    this.isLoggedIn$
      .subscribe(isLoggedIn => { if (isLoggedIn) {this.getAuthorizedDepartments(); } } );    

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
