import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MyService } from './models/myService';
import { MYSERVICES } from './mocks/mock-my-services';
import { MessageService } from './message.service';
import { NotificationService } from './notification.service';

@Injectable()
export class MyServicesService {

  constructor(private notificationService: NotificationService,
    /* private messageService: MessageService */) { }

  getAuthorizedServices(): Observable<MyService[]> {
    // Todo: send the message _after_ fetching the heroes
    this.notificationService.notificationSubject.next('authorizedService: fetched authorized services');
    /*this.messageService.openSnackBar('authorizedService: fetched authorized services', 'Dismiss');*/
    return of(MYSERVICES);
  }

}
