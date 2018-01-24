import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/services/auth.service';

import { MyService } from '../shared/services/models/myService';
import { MyServicesService } from '../shared/services/myServices.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myServices: MyService[];
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private myServicesService: MyServicesService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    // console.log('asdf' + this.authService.isLoggedIn);
    if (this.isLoggedIn$) {
      this.getAuthorizedServices();
    }
  }

  onLogout() {
    this.authService.logout();
  }

  getAuthorizedServices(): void {
    this.myServicesService.getAuthorizedServices()
      .subscribe(myServices => this.myServices = myServices);
  }

}
