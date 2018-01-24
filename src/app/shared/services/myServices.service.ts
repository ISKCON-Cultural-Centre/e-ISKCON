import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MyService } from './models/myService';
import { MYSERVICES } from './mocks/mock-my-services';
import { MessageService } from './message.service';

@Injectable()
export class MyServicesService {

  constructor(private messageService: MessageService) { }

  getAuthorizedServices(): Observable<MyService[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.openSnackBar('authorizedService: fetched authorized services', 'Dismiss');
    return of(MYSERVICES);
  }

}
