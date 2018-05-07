import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';

import {LoopBackFilter} from '../../../shared/sdk/models/BaseModels';
import { SharedComponentsModule } from '../../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../../shared/components/dialog-box/dialog-box.component';
import {  EventMaster, EventMasterApi, Department, DepartmentApi } from '../../../shared/sdk';
import { AuthService, NotificationService } from '../../../shared/services';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  styleUrls: ['./event-master.component.css']
})
export class EventMasterComponent implements OnInit {

  loopBackFilter: LoopBackFilter = {};

  resultsLength = 0;
  displayedColumns = ['eventName', 'department', 'delete'];
  add = false; // add new role
  serviceRoles: EventMaster[] = [];
  departments: Department[] = [];
  dataSource = new MatTableDataSource<EventMaster>();
  selected = '';
  dialogResult = '';

  eventForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private eventMasterApi: EventMasterApi,
    private departmentApi: DepartmentApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadEventMaster();
    this.loadDepartments();
  }

  createForm() {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      departmentId: ['', Validators.required],
    });
  }

  editDepartmentField($event: MatSelectChange, event: EventMaster ) {
    console.log($event);
    console.log(event);
    this.eventMasterApi.patchAttributes(event.id, {departmentId: $event.value})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.eventName + '" updated successfully'));
  }

  editNameField(editValue: string, el: any) {
    this.eventMasterApi.patchAttributes(el.id, {eventName: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.eventName + '" updated successfully'));
  }

  displayCreateEvent() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addEvent() {
    this.eventMasterApi.create<EventMaster>(this.eventForm.value)
    .subscribe(result => {
      this.loadEventMaster();
      this.notificationService.notificationSubject.next('"' + result.eventName + '" created successfully');
      this.add = false;
      this.eventForm.reset();
      }
    );
  }


  deleteRole(event: EventMaster) {
    this.eventMasterApi.deleteById(event.id)
    .subscribe(result => {
      this.loadEventMaster();
      this.notificationService.notificationSubject.next('Event ' + '"' + event.eventName + '" deleted successfully');
      }
    );
  }

  loadEventMaster() {
    this.eventMasterApi.find<EventMaster>()
    .subscribe(
      events => {
        this.resultsLength = events.length;
        this.dataSource.data = events;
      }
    )
  }

  loadDepartments() {
    this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    //this.loopBackFilter.include = ['fkDepartmentDevotee1rel', 'events'];
    this.loopBackFilter.order = ['departmentName ASC'];
    this.departmentApi.find<Department>(this.loopBackFilter)
    .subscribe(
      departments => {
        this.departments = departments;
      }
    )
  }

  openDialog(event: EventMaster) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Event ' + event.eventName
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteRole(event);
      } else { }
    });
  }

}

