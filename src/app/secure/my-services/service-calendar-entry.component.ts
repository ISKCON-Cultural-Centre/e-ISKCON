import { Component, OnInit, ViewChild, OnDestroy, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Department, DepartmentApi,
  DepartmentEvent, DepartmentEventApi } from '../../shared/sdk';
import { MaterialModule } from '../../material.module';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { AuthService, NotificationService } from '../../shared/services';
import { Observable } from 'rxjs/Observable';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-service-calendar-entry',
  templateUrl: './service-calendar-entry.component.html',
  styleUrls: ['./service-calendar-entry.component.css']
})
export class ServiceCalendarEntryComponent  implements OnInit, OnDestroy {
  panelOpenState: boolean = false;
  dialogTitle:  String;
  one$ = new Subscription();

  departments: Observable<Department[]>;
  //departments: Department[] = [];
  newEvent: boolean;
  loopBackFilter: LoopBackFilter = {};
  userId: String = null;

  eventForm: FormGroup;
  deleteEvent = false;

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private departmentApi: DepartmentApi,
    private departmentCalendarApi: DepartmentEventApi,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<ServiceCalendarEntryComponent>,
    @Inject(MAT_DIALOG_DATA) data
  )  {

      this.createForm();
      this.newEvent = data.newEvent;
      this.departments = data.departments;
      if (data.newEvent) {
        this.dialogTitle = 'Create a New Event';
      } else {
        this.dialogTitle = 'Edit Event';
      }

      if (!data.newEvent) {
        this.eventForm.get('id').setValue(data.event.id);
        this.eventForm.get('startTime').setValue(data.event.start.format());
          this.eventForm.get('endTime').setValue(data.event.end.format());
          this.eventForm.get('eventName').setValue(data.event.title);
          this.eventForm.get('eventDescription').setValue(data.event.description);
          this.eventForm.get('id').setValue(data.event.id);
          this.eventForm.get('departmentId').setValue(data.event.departmentId);
        } else {
          if (data.start) {
          this.eventForm.get('startTime').setValue(data.start.format());
          this.eventForm.get('endTime').setValue(data.end.format());
          }

        }
    }

  ngOnInit() {

  }

  createForm() {
    this.eventForm = this.fb.group({
      id: [null],
      eventName: [null, Validators.required],
      departmentId: [null, Validators.required],
      eventDescription: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      allDayInd: [0, Validators.required],
      publicInd: [0, Validators.required],
    });
  }

  addEditDepartmentEvent() {
    if (this.newEvent) {
      this.addDepartmentEvent();
    } else {
      this.updateDepartmentEvent();
    }

  }

  addDepartmentEvent() {
    this.one$ = this.departmentCalendarApi.create<DepartmentEvent>(
      this.eventForm.value
    )
    .subscribe(result => {
      //console.log(result.subject);
      this.notificationService.notificationSubject.next('"' + result.eventName + '" created successfully');
      this.dialogRef.close(result);
      }
    );
  }

  updateDepartmentEvent() {
    this.one$ = this.departmentCalendarApi.patchAttributes(this.eventForm.get('id').value, this.eventForm.value)
    .subscribe(result => {
      //console.log(result.subject);
      this.notificationService.notificationSubject.next('"' + result.eventName + '" updated successfully');
      this.dialogRef.close(result);
      }
    );
  }

  deleteDepartmentEvent(calendarId: String) {
    this.deleteEvent = true;
    this.departmentCalendarApi.deleteById(calendarId)
    .subscribe(result => {
      this.notificationService.notificationSubject.next('Event deleted successfully');
      this.close();
      }
    );
  }


  cancel() {
    this.eventForm.reset();
  }


  cleanClose() {
    this.dialogRef.close({forceClose: true});
  }

  close() {
    if (this.deleteEvent) {
      this.dialogRef.close({
          deleteEvent: this.deleteEvent,
          id: this.eventForm.get('id').value
    } );
  } else {
    this.dialogRef.close({ data:
        {
          deleteEvent: this.deleteEvent,
          id: this.eventForm.get('id').value,
          title: this.eventForm.get('eventName').value,
          description: this.eventForm.get('eventDescription').value,
          start: this.eventForm.get('startTime').value,
          end: this.eventForm.get('endTime').value,
          departmentId: this.eventForm.get('departmentId').value,
          allDay: this.eventForm.get('allDayInd').value,
          publicInd: this.eventForm.get('publicInd').value
        }
      }
      );
    }
  }




  openDialog(calendar: FormGroup) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Event '
    });
    this.one$ = dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDepartmentEvent(calendar.get('id').value);
      } else { }
    });
  }


  ngOnDestroy(){
    this.one$.unsubscribe();
   }  

}

