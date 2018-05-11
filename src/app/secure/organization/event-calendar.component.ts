import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog,  MatDialogConfig } from '@angular/material';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventService } from './event-calendar.service';

import { ServiceCalendarEntryComponent} from '../my-services/service-calendar-entry.component';
import { Department, DepartmentCalendar, DepartmentAnnouncementApi } from '../../shared/sdk/index';
import { MyDepartmentsService } from './my-departments.service';
import { AuthService } from '../../shared/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {
  calendarOptions: Options;
  displayEvent: any;
  departments: string [];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(
    protected eventService: EventService,
    private authService: AuthService,
    //protected myDepartmentsService: MyDepartmentsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {

/*         this.departments = this.authService.getMyDepartments.map(function (department) {
          return department.id;
         }); */
       // console.log(this.departments);

          //console.log(this.departments);
        this.eventService.getCurrentEvents().subscribe(events => {
          const calendarEvents = events.map(function (event) {
            return {
              id: event.id, 
              title: event.eventName, 
              allDay: event.allDayInd === 0 ? false : true,
              start: event.startTime,
              end: event.endTime,
              color: 'blue',
              //event.departmentId
              description: event.eventDescription,
              departmentId: event.departmentId
            };
          });
          
          this.calendarOptions = {
            timezone: 'Asia/Kolkata',
            selectable: true,
            selectHelper: true,
            editable: true,
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

  eventClick(newEvent: boolean, event: DepartmentCalendar) {
    this.openEventDialog(newEvent, event)
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
    //console.log(event);
    let newEvent = {
      title: event.eventName,
      start: event.startTime,
      end: (event.allDayInd === 1 ? null : event.endTime),
      allDay: event.allDayInd === 1 ? true : false,
      //color: 
    }
    this.ucCalendar.fullCalendar('renderEvent', newEvent);
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
  select(newEvent: boolean, event: DepartmentCalendar) {
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
//console.log(newEvent);
    const dialogConfig = new MatDialogConfig();
    if (!event) {
      event = new DepartmentCalendar();
    }

    dialogConfig.data = event;
    dialogConfig.data.newEvent = newEvent;
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
  
    const dialogRef = this.dialog.open(ServiceCalendarEntryComponent, dialogConfig);
  
    dialogRef.afterClosed().subscribe(
      data => {
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
        }
      }
    );
  }

}