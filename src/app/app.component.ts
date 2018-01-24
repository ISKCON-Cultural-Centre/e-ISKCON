import { Component } from '@angular/core';
import { BASE_URL, API_VERSION } from './shared/base.url';
import { LoopBackConfig } from './shared/sdk';
import { MatSnackBar } from '@angular/material';

import { NotificationService } from './shared/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private notificationService: NotificationService, 
    public snackBar: MatSnackBar) 
    {
      this.notificationService.notificationSubject.subscribe((message) => {
      snackBar.open(message,null , { duration: 2000, });

      LoopBackConfig.setBaseURL(BASE_URL);
      LoopBackConfig.setApiVersion(API_VERSION);    

  }
}
