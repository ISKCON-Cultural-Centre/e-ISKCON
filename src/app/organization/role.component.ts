import { Component, OnInit, ViewChild} from '@angular/core';

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
  serviceRoles: ServiceRole[];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private serviceRoleApi: ServiceRoleApi
  ) 
  {  
    //this.createForm();
  }

  ngOnInit() {
    this.loadRoles();
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
    this.serviceRoleApi.create({name: 'TEST', description: 'TEST' })
    .subscribe(result => {
      this.loadRoles();
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

