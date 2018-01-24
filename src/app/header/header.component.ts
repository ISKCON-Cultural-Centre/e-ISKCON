import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/services/auth.service';

import { MyDepartment } from '../shared/services/models/myDepartment';
import { MyServicesService } from '../shared/services/myServices.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDepartments: MyDepartment[];
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private myServicesService: MyServicesService) { }

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
      .subscribe(myDepartments => this.myDepartments = myDepartments);
  }

}
