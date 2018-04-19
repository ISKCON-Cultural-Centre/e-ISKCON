import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Devotee, DevoteeApi, Temple, TempleApi, Department, DepartmentApi } from '../../shared/sdk';
import {  NotificationService} from '../../shared/services';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  displayedColumns = ['name', 'temple', 'leader', 'icon', 'route', 'delete'];
  add = false; 
  departments: Department[] = [];
  temples: Temple[] = [];
  devotees: Devotee[] = [];
  dataSource = new MatTableDataSource<Department>();

  departmentForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private departmentApi: DepartmentApi,
    private devoteeApi: DevoteeApi,
    private templeApi: TempleApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadDepartments();
    this.loadDevotees();
    this.loadTemples();
  }

  createForm() {
    this.departmentForm = this.fb.group({
      templeId: ['', Validators.required],
      departmentName: ['', Validators.required],
      departmentLeaderDevoteeId: ['', Validators.required],
      icon: ['', Validators.required],
      route: ['', Validators.required]
    });
  }

  editDepartmentLeaderField($event: MatSelectChange, department: Department ) {
    this.departmentApi.patchAttributes(department.id, {departmentLeaderDevoteeId: $event.value})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editTempleField($event: MatSelectChange, department: Department ) {
    this.departmentApi.patchAttributes(department.id, {templeId: $event.value})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editDepartmentNameField(editValue: string, el: any) {
    this.departmentApi.patchAttributes(el.id, {departmentName: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editIconField(editValue: string, el: any) {
    this.departmentApi.patchAttributes(el.id, {icon: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editRouteField(editValue: string, el: any) {
    this.departmentApi.patchAttributes(el.id, {route: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  displayCreateDepartment() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addDepartment() {
    this.departmentApi.create<Department>(this.departmentForm.value)
    .subscribe(result => {
      this.loadDepartments();
      this.notificationService.notificationSubject.next('"' + result.departmentName + '" created successfully');
      this.add = false;
      this.departmentForm.reset();
      }
    );
  }


  deleteDepartment(department: Department) {
    this.departmentApi.deleteById(department.id)
    .subscribe(result => {
      this.loadDepartments();
      this.notificationService.notificationSubject.next('Role ' + '"' + department.departmentName + '" deleted successfully');
      }
    );
  }


  loadDepartments() {
    this.departmentApi.find<Department>({'order': 'departmentName ASC'})
    .subscribe(
      departments => {
        this.departments = departments;
        this.dataSource.data = departments;
      }
    )
  }

  loadDevotees() {
    this.devoteeApi.find<Devotee>({'order': 'spiritualName ASC'})
    .subscribe(
      devotees => {
        this.devotees = devotees;
      }
    )
  }

  loadTemples() {
    this.templeApi.find<Temple>()
    .subscribe(
      temples => {
        this.temples = temples;
      }
    )
  }  

  openDialog(department: Department) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the department ' + department.departmentName
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDepartment(department);
      } else { }
    });
  }

}

