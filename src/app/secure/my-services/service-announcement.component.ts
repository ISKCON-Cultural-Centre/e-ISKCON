import { Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Department, DepartmentApi,
  DepartmentAnnouncement, DepartmentAnnouncementApi } from '../../shared/sdk';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { AuthService, NotificationService } from '../../shared/services';

@Component({
  selector: 'app-service-announcement',
  templateUrl: './service-announcement.component.html',
  styleUrls: ['./service-announcement.component.css']
})
export class ServiceAnnouncementComponent implements OnInit, OnDestroy {
  displayedColumns = ['subject', 'message', 'validity', 'delete' ];

  panelOpenState: boolean = false;

  one$ = new Subscription();

  departments: Department[] = [];
  add = false; 
  loopBackFilter: LoopBackFilter = {};


  serviceAnnouncementForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


   constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private departmentApi: DepartmentApi,
    private departmentAnnouncementApi: DepartmentAnnouncementApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadDepartments();
  }

  createForm() {
    this.serviceAnnouncementForm = this.fb.group({
      departmentId: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      validUntil: ['', Validators.required]
    });
  }


  addDepartmentAnnouncement() {
    this.one$ = this.departmentAnnouncementApi.create<DepartmentAnnouncement>(this.serviceAnnouncementForm.value)
    .subscribe(result => {
      this.loadDepartments();
/*       const departmentIndex = this.departments.indexOf(this.serviceAnnouncementForm.get('departmentId').value);
      console.log(this.serviceAnnouncementForm.get('departmentId').value);
      console.log(departmentIndex);
      if (departmentIndex !== -1) {
        this.serviceAnnouncementForm.setValue({departmentId: result.id})
        this.departments[departmentIndex].announcements.push(this.serviceAnnouncementForm.value);
      } */
      this.add = false;
      //console.log(result.subject);
      this.notificationService.notificationSubject.next('"' + result.subject + '" created successfully');
      this.serviceAnnouncementForm.reset();
      }
    );
  }


  deleteDepartmentAnnouncement(department: Department, announcement: DepartmentAnnouncement) {
    this.departmentAnnouncementApi.deleteById(announcement.id)
    .subscribe(result => {
      //this.loadDepartments();
      const departmentIndex = this.departments.indexOf(department);
      if (departmentIndex !== -1) {
        const announcmentIndex = this.departments[departmentIndex].announcements.indexOf(announcement);
        if (announcmentIndex !== -1) {
          this.departments[departmentIndex].announcements.splice(announcmentIndex, 1);
        }
      }
      this.notificationService.notificationSubject.next('Announcement ' + '"' + announcement.subject + '" deleted successfully');
      }
    );
  }

  loadDepartments() {
    this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.loopBackFilter.include = ['fkDepartmentDevotee1rel', 'announcements'];
    this.loopBackFilter.order = ['departmentName ASC'];
    this.departmentApi.find<Department>(this.loopBackFilter)
    .subscribe(
      departments => {
        this.departments = departments;
        //console.log('departments');
        //console.log(departments);
      }
    )
  }


  displayCreateAnnouncement() {
    this.add = true;
  }

  cancel() {
    this.add = false;
    this.serviceAnnouncementForm.reset();
  }




  openDialog(department: Department, departmentAnnouncement: DepartmentAnnouncement) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Announcement ' + departmentAnnouncement.subject
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDepartmentAnnouncement(department, departmentAnnouncement);
      } else { }
    });
  }


  ngOnDestroy(){
    this.one$.unsubscribe();
   }  

}

