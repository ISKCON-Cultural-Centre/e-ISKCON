import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class NotificationService {
  public notificationSubject: Subject<string> = new Subject();
  constructor() {}
}

