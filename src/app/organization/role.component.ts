import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';

import { InlineEditComponent } from '../shared/components/inline-edit/inline-edit.component';

import { } from '../shared/'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  resultsLength = 0;
  displayedColumns = ['roleName', 'roleDescription', 'select', 'department'];
  add = false; // add new role
  serviceRoles: ServiceRole[] = [];
  departments: Department[] = [];
  dataSource = new MatTableDataSource<ServiceRole>();
  selected = '';

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
    private fb: FormBuilder) {
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
      //this.serviceRoles.unshift(result);
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

}

