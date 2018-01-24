import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NotificationService {
    public notificationSubject: Subject<string> = new Subject();
  }
}



