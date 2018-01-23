import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MyService } from './myService';
import { MYSERVICES } from './mock-my-services';
import { MessageService } from './message.service';

@Injectable()
export class MyServicesService {

  constructor(private messageService: MessageService) { }

  getAuthorizations(): Observable<MyService[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('authorizedService: fetched authorized services');
    return of(MYSERVICES);
  }

}
