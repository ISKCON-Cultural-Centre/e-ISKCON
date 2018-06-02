import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventsService } from './events.service';
import { EventsDataSource } from './events-data-source';

import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';
import { ServiceCalendarEntryComponent } from '../my-services/service-calendar-entry.component';
import { Department, DepartmentEvent, DepartmentApi } from '../../shared/sdk/index';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit, OnDestroy {
  calendarOptions: Options;
  displayEvent: any;
  departments: Department[];
  departmentsArray: String[] = [];
  dataSource = new EventsDataSource(this.eventService);
  filteredDevoteesCount = new BehaviorSubject<number>(0);
  loopBackFilter1: LoopBackFilter = {};
  loopBackFilter2: LoopBackFilter = {};
  one$ = new Subscription();
  //departmentEvents: Observable<DepartmentEvent[]>;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(
    protected eventService: EventsService,
    private authService: AuthService,
    private departmentApi: DepartmentApi,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    //this.loadEvents();
    this.loopBackFilter1.where = { 'startTime': { gte: new Date() } };
    this.dataSource.loadEvents(this.loopBackFilter1);
    this.loopBackFilter2.where = { 'departmentLeaderDevoteeId': this.authService.getCurrentUserId() };
    this.departmentApi.find<Department>(this.loopBackFilter2).subscribe(
      departments => {
        this.departments = departments;
        this.departmentsArray = departments.map(function (department) {
          return department.id;
        });
        //this.departmentEvents = this.dataSource.connect();
        this.loadEvents();
      }
    );
  }

  loadEvents() {
    this.one$ = this.dataSource.connect().subscribe(events => {
      const calendarEvents = events.map((event) => {
        return {
          id: event.id,
          title: event.eventName,
          allDay: event.allDayInd === 0 ? false : true,
          start: event.startTime,
          end: event.endTime,
          color: this.departmentsArray.indexOf(event.departmentId) ? 'blue' : 'red',
          editable: this.departmentsArray.indexOf(event.departmentId) ? false : true,
          description: event.eventDescription,
          departmentId: event.departmentId
        };
      });
      this.calendarOptions = {
        timezone: false,
        selectable: true,
        selectHelper: true,
        editable: false,
        eventLimit: true,
        views: {
          agenda: {
            eventLimit: 5 // adjust only for agendaWeek/agendaDay
          },
          month: {
            eventLimit: 3 // adjust only for month
          },
        },
        //unselectCancel: '.event-entry',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: calendarEvents
      };
    });
  }


  clickButton(model: any) {
    this.displayEvent = model;
  }

  eventClick(newEvent: boolean, event: any) {
    if (event.event.editable) {
      this.openEventDialog(newEvent, event);
    }
  }

  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  eventRender(event: any) {
    let newEvent = {
      id: event.id,
      title: event.eventName,
      description: event.eventDescription,
      departmentId: event.departmentId,
      start: event.startTime,
      end: (event.allDayInd === 1 ? null : event.endTime),
      allDay: event.allDayInd === 1 ? true : false,
      color: 'red',
      editable: true
    }
    this.ucCalendar.fullCalendar('renderEvent', newEvent);
  }

  initialized(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  select(newEvent: boolean, event: DepartmentEvent) {
    this.openEventDialog(newEvent, event);
  }

  unselect(model: any) {
    //console.log(model);
  }

  dayClick(model: any) {
    //console.log(model);
  }

  navLinkDayClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  navLinkWeekClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }


  openEventDialog(newEvent: boolean, event?: any) {
    const dialogConfig = new MatDialogConfig();
    if (!event) {
      event = new DepartmentEvent();
    }
    dialogConfig.data = event;
    dialogConfig.data.newEvent = newEvent;
    dialogConfig.data.departments = this.departments;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.dialog.open(ServiceCalendarEntryComponent, dialogConfig);

    this.one$ = dialogRef.afterClosed().subscribe(
      data => {
        if (!data.forceClose) {
          if (newEvent) {
            this.eventRender(data);
            
          } else {
            event.event.id = data.id;
            event.event.title = data.eventName;
            event.event.description = data.description;
            event.event.start = data.start;
            event.event.end = data.end;
            event.event.allDay = data.allDay;
            event.event.publicInd = data.publicInd;
            this.ucCalendar.fullCalendar('updateEvent', event.event);
            if (data.deleteEvent) {
              this.ucCalendar.fullCalendar('removeEvents', data.id);
            }
          }
        }
      }
    );
  }

  ngOnDestroy() {
    this.one$.unsubscribe();
  }

}