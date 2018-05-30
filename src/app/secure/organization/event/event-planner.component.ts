import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

//import { RawPrintService } from '../../../shared/services/raw-print.service';
//import * as print from 'print-js';
import { EventsService } from '../events.service';
import { EventsDataSource } from '../events-data-source';
import {LoopBackFilter} from '../../../shared/sdk/models/BaseModels';
import { Department, DepartmentApi, DevoteeApi, Devotee, DepartmentEvent, DepartmentEventApi, EventMaster, EventMasterApi} from '../../../shared/sdk';
import { AuthService, NotificationService } from '../../../shared/services';

@Component({
  selector: 'app-event-planner',
  templateUrl: './event-planner.component.html',
  styleUrls: ['./event-planner.component.css']
})
export class EventPlannerComponent implements OnInit {

  dataSource = new EventsDataSource(this.eventService);
  loopBackFilter1: LoopBackFilter = {};
  loopBackFilter2: LoopBackFilter = {};
  departments: Department[];

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();

  public qrCode: string = null;
  constructor (
    private notificationService: NotificationService,
    private eventMasterApi: EventMasterApi,
    private departmentEventApi: DepartmentEventApi,
    private authService: AuthService,
    private departmentApi: DepartmentApi,    
    protected eventService: EventsService  
  ) {
      // assign a value
      this.qrCode = 'Your QR code data string';
  }

  ngOnInit() {
    this.loopBackFilter1.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.departmentApi.find<Department>(this.loopBackFilter1).subscribe(
     departments => {
        this.departments = departments;
        this.loopBackFilter2.where = {'departmentId': {eq: this.departments}};
        this.dataSource.loadEvents(this.loopBackFilter2);
         this.dataSource.connect().subscribe(
          events => console.log(events)
        );
       });

  }

}

