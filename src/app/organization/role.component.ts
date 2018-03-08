import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MaterialModule } from '../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';

import { SharedComponentsModule } from '../shared/components/shared-components.module'
import { InlineEditComponent } from '../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  resultsLength = 0;
  displayedColumns = ['roleName', 'roleDescription', 'department', 'delete'];
  add = false; // add new role
  serviceRoles: ServiceRole[] = [];
  departments: Department[] = [];
  dataSource = new MatTableDataSource<ServiceRole>();
  selected = '';
  dialogResult = '';

  roleForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private serviceRoleApi: ServiceRoleApi,
    private departmentApi: DepartmentApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadRoles();
    this.loadDepartments();
  }

  createForm() {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      departmentId: ['', Validators.required],
    });
  }

  editDepartmentField($event: MatSelectChange, role: ServiceRole ) {
    console.log($event);
    console.log(role);
    this.serviceRoleApi.patchAttributes(role.id, {departmentId: $event.value})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.name + '" updated successfully'));
  }

  editNameField(editValue: string, el: any) {
    this.serviceRoleApi.patchAttributes(el.id, {name: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.name + '" updated successfully'));
  }

  editDescriptionField(editValue: string, el: any) {
    this.serviceRoleApi.patchAttributes(el.id, {description: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.description + '" updated successfully'));
  }

  displayCreateRole() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addRole() {
    this.serviceRoleApi.create<ServiceRole>(this.roleForm.value)
    .subscribe(result => {
      //this.dataSource.data.push(result);
      this.loadRoles();
      this.notificationService.notificationSubject.next('"' + result.name + '" created successfully');
      this.add = false;
      this.roleForm.reset();
      }
    );
  }


  deleteRole(role: ServiceRole) {
    this.serviceRoleApi.deleteById(role.id)
    .subscribe(result => {
      //this.serviceRoles.push(result);
      this.loadRoles();
      this.notificationService.notificationSubject.next('Role ' + '"' + role.name + '" deleted successfully');
      }
    );
  }

  loadRoles() {
    this.serviceRoleApi.find<ServiceRole>()
    .subscribe(
      roles => {
        this.resultsLength = roles.length;
        this.dataSource.data = roles;
      }
    )
  }

  loadDepartments() {
    this.departmentApi.find<Department>()
    .subscribe(
      departments => {
        this.departments = departments;
      }
    )
  }

  openDialog(role: ServiceRole) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the role ' + role.name
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteRole(role);
      } else { }
    });
  }

}

