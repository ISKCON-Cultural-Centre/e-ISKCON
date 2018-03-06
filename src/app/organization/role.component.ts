import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { InlineEditComponent } from '../shared/components/inline-edit/inline-edit.component';

import { } from '../shared/'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  resultsLength = 0;
  displayedColumns = ['roleName', 'roleDescription'];
  add = false; // add new role
  serviceRoles: ServiceRole[];
  dataSource = new MatTableDataSource();

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
    private fb: FormBuilder) {
      this.createForm();
    }

  ngOnInit() {
    this.loadRoles();
  }

  createForm() {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  editNameField(editValue: string, el: any) {
    this.serviceRoleApi.patchAttributes(el.id, {name: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.name + '" updated successfully'));
  }

  editDescriptionField(editValue: string, el: any) {
    this.serviceRoleApi.patchAttributes(el.id, {description: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.description + '" updated successfully'));
  }

  createRole() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }
  

  addRole() {
    this.serviceRoleApi.create<ServiceRole>(this.roleForm.value)
    .subscribe(result => {
      this.serviceRoles.push(result);
      console.log(result);
      // this.loadRoles();
      this.notificationService.notificationSubject.next('"' + result.name + '" created successfully');
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

}

