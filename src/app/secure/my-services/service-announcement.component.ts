import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Department, DepartmentApi,
  DepartmentAnnouncement, DepartmentAnnouncementApi } from '../../shared/sdk';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';

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
export class ServiceAnnouncementComponent implements OnInit {


  displayedColumns = ['name', 'temple', 'leader', 'icon', 'route', 'delete'];
  
  announcementsArray: any[] = [];
  departments: Department[] = [];
  announcements: DepartmentAnnouncement[] = [];
  departmentAnnouncementMap: { [department: string]: {department: Department, announcements: DepartmentAnnouncement[] }} = {};

  loopBackFilter: LoopBackFilter = {};

  dataSource = new MatTableDataSource<Department>();

  serviceAnnouncementForm: FormGroup;

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
    private departmentApi: DepartmentApi,
    private departmentAnnouncementApi: DepartmentAnnouncementApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadDepartments();
    this.loadDepartmentAnnouncements();
    this.departments.forEach((department) => {
      this.announcements.forEach( (announcement) => {
        if (!this.departmentAnnouncementMap[department.departmentName]) {
          this.departmentAnnouncementMap[department.departmentName] = {department, announcements: [] };
        }
        this.departmentAnnouncementMap[department.departmentName].announcements.push(announcement);
        });
    });
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
    this.departmentAnnouncementApi.create<Department>(this.serviceAnnouncementForm.value)
    .subscribe(result => {
      this.loadDepartments();
      this.notificationService.notificationSubject.next('"' + result.departmentName + '" created successfully');
      this.serviceAnnouncementForm.reset();
      }
    );
  }


  deleteDepartmentAnnouncement(announcement: DepartmentAnnouncement) {
    this.departmentApi.deleteById(announcement.id)
    .subscribe(result => {
      this.loadDepartments();
      this.notificationService.notificationSubject.next('Announcement ' + '"' + announcement.subject + '" deleted successfully');
      }
    );
  }


  loadDepartments() {
    this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.loopBackFilter.include = ['fkDepartmentDevotee1rel', ];
    this.loopBackFilter.order = ['departmentName ASC'];
    this.departmentApi.find<Department>(this.loopBackFilter)
    .subscribe(
      departments => {
        this.departments = departments;
        console.log('departments');
        console.log(departments);
        //this.dataSource.data = departments;
      }
    )
  }

  loadDepartmentAnnouncements() {
    this.departmentAnnouncementApi.find<DepartmentAnnouncement>({'order': 'validUntil DESC'})
    .subscribe(
      announcements => {
        this.announcements = announcements;
      }
    )
  }

  openDialog(departmentAnnouncement: DepartmentAnnouncement) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Announcement ' + departmentAnnouncement.subject
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDepartmentAnnouncement(departmentAnnouncement);
      } else { }
    });
  }

}

