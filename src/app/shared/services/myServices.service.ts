import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MYDEPARTMENTS } from './mocks/mock-my-departments';
import { MessageService } from './message.service';
import { NotificationService } from './notification.service';
import { MyDepartment } from './models/myDepartment';

@Injectable()
export class MyServicesService {

  constructor(private notificationService: NotificationService,
    /* private messageService: MessageService */) { }

  getAuthorizedDepartments(): Observable<MyDepartment[]> {
    this.notificationService.notificationSubject.next('authorizedService: fetched authorized services');
    /*this.messageService.openSnackBar('authorizedService: fetched authorized services', 'Dismiss');*/
    return of(MYDEPARTMENTS);
  }

}
