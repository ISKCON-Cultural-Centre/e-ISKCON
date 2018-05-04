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

@Component({
  selector: 'app-service-calendar-entry',
  templateUrl: './service-calendar-entry.component.html',
  styleUrls: ['./service-calendar-entry.component.css']
})
export class ServiceCalendarEntryComponent  implements OnInit, OnDestroy {
  panelOpenState: boolean = false;

  one$ = new Subscription();

  departments: Department[] = [];

  loopBackFilter: LoopBackFilter = {};


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
        if (data.start) {
          this.eventForm.get('startTime').setValue(data.start.format());
          this.eventForm.get('endTime').setValue(data.end.format());
        }
    }

  ngOnInit() {
    this.loadDepartments();
  }

  createForm() {
    this.eventForm = this.fb.group({
      eventName: [null, Validators.required],
      departmentId: [null, Validators.required],
      eventDescription: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      allDayInd: [0, Validators.required],
      publicInd: [0, Validators.required],
    });
    
  }


  addDepartmentEvent() {
    this.one$ = this.departmentCalendarApi.create<DepartmentCalendar>(
      this.eventForm.value
    )
    .subscribe(result => {
      this.loadDepartments();

      //console.log(result.subject);
      this.notificationService.notificationSubject.next('"' + result.eventName + '" created successfully');
      this.dialogRef.close(result);
      }
    );
  }


  deleteDepartmentEvent(department: Department, calendar: DepartmentCalendar) {
    this.departmentCalendarApi.deleteById(calendar.id)
    .subscribe(result => {
      const departmentIndex = this.departments.indexOf(department);
      if (departmentIndex !== -1) {
        const eventIndex = this.departments[departmentIndex].events.indexOf(calendar);
        if (eventIndex !== -1) {
          this.departments[departmentIndex].events.splice(eventIndex, 1);
        }
      }
      this.notificationService.notificationSubject.next('Event ' + '"' + calendar.eventName + '" deleted successfully');
      }
    );
  }

  loadDepartments() {
    this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.loopBackFilter.include = ['fkDepartmentDevotee1rel', 'events'];
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
    this.dialogRef.close();
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

