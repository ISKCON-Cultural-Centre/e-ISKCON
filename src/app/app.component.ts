import { Component, OnInit } from '@angular/core';
import { BASE_URL, API_VERSION } from './shared/base.url';
import { LoopBackConfig } from './shared/sdk';
import { MatSnackBar, MatRadioButton, MatRadioGroup } from '@angular/material';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { NotificationService } from './shared/services/notification.service';
import { AuthService } from './shared/services/auth.service';

import { Department } from './shared/sdk/models/Department';
import { MyDepartment } from './shared/services/models/myDepartment';
import { MyServicesService } from './shared/services/myServices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent  implements OnInit {

  mode = new FormControl('over');

  myDepartments: Department[];
  isLoggedIn: Boolean;
  isLoggedIn$: Observable <Boolean>;
  devoteeName$: Observable <String>;
  username: String = '';

  constructor(private notificationService: NotificationService,
    private authService: AuthService,
    private myServicesService: MyServicesService,    
    private snackBar: MatSnackBar)
    {
      if (this.authService.loggedIn) {
        this.authService.devoteeName.next(this.authService.getCurrentUserData());
      }

      this.notificationService.notificationSubject.subscribe((message) => {
        snackBar.open(message, null , { duration: 2000, });
      });

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);
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
        });
    }

}
