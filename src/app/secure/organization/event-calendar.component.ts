import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,  MatDialogConfig } from '@angular/material';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from './event-calendar.service';

import { ServiceCalendarEntryComponent} from '../my-services/service-calendar-entry.component';
import { DepartmentCalendar } from '../../shared/sdk/index';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  calendarOptions: Options;
 displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(
    protected eventService: EventService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.eventService.getCurrentEvents().subscribe(events => {
      const calendarEvents = events.map(function (event) {
        return {id: event.id, title: event.eventName, allDay: event.allDayInd === 0 ? false : true,
          start: event.startTime, end: event.endTime };
        //return {id: event.id, title: event.title, allDay: event.allDay, start: event.start, end: event.end };
      });
      this.calendarOptions = {
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: false,
        unselectCancel: '.event-entry',
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: calendarEvents
      };
      console.log(calendarEvents);
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
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
  eventRender(model: any) {
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
/*   windowResize(model: any) {
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
  viewRender(model: any) {
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
  viewDestroy(model: any) {
    console.log(model);
  } */
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
  select(model: any) {
    this.openAddEventDialog(model);
  }
  unselect(model: any) {
    console.log(model);
  }
  dayClick(model: any) {
    console.log(model);
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

  openAddEventDialog(newEvent?: DepartmentCalendar) {

    const dialogConfig = new MatDialogConfig();
    if (!newEvent) {
      newEvent = new DepartmentCalendar();
    }
    dialogConfig.data = newEvent;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
  
    const dialogRef = this.dialog.open(ServiceCalendarEntryComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(
      //data => console.log('Dialog output:', data)
    );
  }

}