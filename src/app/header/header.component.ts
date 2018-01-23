import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/services/auth.service';
import { DevoteeApi } from '../shared/sdk';

import { MyService } from '../shared/services/myService';
import { MyServicesService } from '../shared/services/myServices.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myServices: MyService[];
  isLoggedIn$: Observable<boolean>;


  constructor(private devoteeApi: DevoteeApi, private authService: AuthService, private myServicesService: MyServicesService) { }

  ngOnInit() {
    if (this.devoteeApi.isAuthenticated) {
      this.isLoggedIn$ = this.authService.isLoggedIn;
      this.getAuthorizations();
    }
  }

  onLogout() {
    this.authService.logout();
  }

  getAuthorizations(): void {
    this.myServicesService.getAuthorizations()
      .subscribe(myServices => this.myServices = myServices);
  }

}
