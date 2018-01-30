import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../shared/services/auth.service';

import { DevoteeApi } from '../shared/sdk';

import { MyDepartment } from '../shared/services/models/myDepartment';
import { MyServicesService } from '../shared/services/myServices.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myDepartments: MyDepartment[];


  constructor(private authService: AuthService,
    private myServicesService: MyServicesService) { }

  ngOnInit() {
   if (this.authService.isAuthenticated) {
     this.getAuthorizedDepartments();
    }
  }

  onLogout() {
    this.authService.logout();
  }
 
  getAuthorizedDepartments(): void {
    this.myServicesService.getAuthorizedDepartments()
      .subscribe(myDepartments => this.myDepartments = myDepartments);
  }

}
