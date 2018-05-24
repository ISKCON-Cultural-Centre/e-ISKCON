import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

//import { RawPrintService } from '../../../shared/services/raw-print.service';
//import * as print from 'print-js';

import {LoopBackFilter} from '../../../shared/sdk/models/BaseModels';
import { DevoteeApi, Devotee, DepartmentEvent, DepartmentEventApi, EventMaster, EventMasterApi} from '../../../shared/sdk';
import { AuthService, NotificationService } from '../../../shared/services';

@Component({
  selector: 'app-event-planner',
  templateUrl: './event-planner.component.html',
  styleUrls: ['./event-planner.component.css']
})
export class EventPlannerComponent implements OnInit {

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();

  public qrCode: string = null;
  constructor (
    private notificationService: NotificationService,
    private eventMasterApi: EventMasterApi,
    private departmentEventApi: DepartmentEventApi,
  ) {
      // assign a value
      this.qrCode = 'Your QR code data string';
  }

  ngOnInit() {

  }

}

