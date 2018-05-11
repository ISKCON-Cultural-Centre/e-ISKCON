import { Component, OnInit, ViewChild, OnDestroy, Inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Department, DepartmentApi,
  DepartmentCalendar, DepartmentCalendarApi } from '../../shared/sdk';
import { MaterialModule } from '../../material.module';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { AuthService, NotificationService } from '../../shared/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-service-calendar-entry',
  templateUrl: './service-calendar-entry.component.html',
  styleUrls: ['./service-calendar-entry.component.css']
})
export class ServiceCalendarEntryComponent  implements OnInit, OnDestroy {
  panelOpenState: boolean = false;

  one$ = new Subscription();

  //departments: Observable<Department[]>;
  departments: Department[] = [];
  newEvent: boolean;
  loopBackFilter: LoopBackFilter = {};
  userId: String = null;

  eventForm: FormGroup;


  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private departmentApi: DepartmentApi,
    private departmentCalendarApi: DepartmentCalendarApi,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<ServiceCalendarEntryComponent>,
    @Inject(MAT_DIALOG_DATA) data
  )  {
     //console.log(data.start.format());

      this.createForm();
      this.newEvent = data.newEvent;
      if (!data.newEvent) {
          this.eventForm.get('startTime').setValue(data.event.start.format());
          this.eventForm.get('endTime').setValue(data.event.end.format());
          this.eventForm.get('eventName').setValue(data.event.title);
          this.eventForm.get('eventDescription').setValue(data.event.description);
          this.eventForm.get('id').setValue(data.event.id);
          this.eventForm.get('departmentId').setValue(data.event.departmentId);
        } else {
          this.eventForm.get('startTime').setValue(data.start.format());
          this.eventForm.get('endTime').setValue(data.end.format());
        }
    }

  ngOnInit() {
    this.authService.isLoggedIn
    .subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.userId = this.authService.getCurrentUserId();
          this.loadDepartments(this.userId);
      } else {}
    });    

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
    this.one$ = this.departmentCalendarApi.create<DepartmentCalendar>(
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

  deleteDepartmentEvent(department: Department, calendar: DepartmentCalendar) {
    this.departmentCalendarApi.deleteById(calendar.id)
    .subscribe(result => {
/*       const departmentIndex = this.departments.indexOf(department);
      if (departmentIndex !== -1) {
        const eventIndex = this.departments[departmentIndex].events.indexOf(calendar);
        if (eventIndex !== -1) {
          this.departments[departmentIndex].events.splice(eventIndex, 1);
        }
      } */
      this.notificationService.notificationSubject.next('Event ' + '"' + calendar.eventName + '" deleted successfully');
      }
    );
  }


  loadDepartments(currentUserId: String) {
    console.log('loadDepartments' + currentUserId);
   this.loopBackFilter.where = {'departmentLeaderDevoteeId': currentUserId};
   this.loopBackFilter.order = ['departmentName ASC'];
   this.departmentApi.find<Department>(this.loopBackFilter)
   .subscribe(
     departments => {
       this.departments = departments;
     }
   )
 }



  cancel() {
    this.eventForm.reset();
  }

  close() {
    this.dialogRef.close({ data: 
        {
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




  openDialog(department: Department, calendar: DepartmentCalendar) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Event ' + calendar.eventName
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDepartmentEvent(department, calendar);
      } else { }
    });
  }


  ngOnDestroy(){
    this.one$.unsubscribe();
   }  

}

