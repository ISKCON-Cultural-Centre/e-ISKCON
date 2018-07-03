import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Devotee, DevoteeApi, ServiceArea, ServiceAreaApi } from '../../shared/sdk';
import {  NotificationService} from '../../shared/services';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs';

import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.css']
})
export class ServiceMasterComponent implements OnInit {


  displayedColumns = ['name', 'description', 'delete'];
  add = false; 
  services: ServiceArea[] = [];
  dataSource = new MatTableDataSource<ServiceArea>();

  serviceForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(
    private notificationService: NotificationService,
    private serviceAreaApi: ServiceAreaApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadServices();
  }

  createForm() {
    this.serviceForm = this.fb.group({
      serviceName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  editServiceNameField(editValue: string, el: any) {
    this.serviceAreaApi.patchAttributes(el.id, {serviceName: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.serviceName + '" updated successfully'));
  }

  editServiceDescriptionField(editValue: string, el: any) {
    this.serviceAreaApi.patchAttributes(el.id, {description: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.serviceName + '" updated successfully'));
  }

  displayCreateService() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addService() {
    //console.log(this.serviceForm.value);
    this.serviceAreaApi.create<ServiceArea>(this.serviceForm.value)
    .subscribe(result => {
      this.loadServices();
      this.notificationService.notificationSubject.next('"' + result.serviceName + '" created successfully');
      this.add = false;
      this.serviceForm.reset();
      }
    );
  }


  deleteService(serviceArea: ServiceArea) {
    this.serviceAreaApi.deleteById(serviceArea.id)
    .subscribe(result => {
      this.loadServices();
      this.notificationService.notificationSubject.next('Role ' + '"' + serviceArea.serviceName + '" deleted successfully');
      }
    );
  }


  loadServices() {
    this.serviceAreaApi.find<ServiceArea>({'order': 'serviceName ASC'})
    .subscribe(
      services => {
        this.services = services;
        this.dataSource.data = services;
      }
    )
  }


  openDialog(serviceArea: ServiceArea) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the Service ' + serviceArea.serviceName
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteService(serviceArea);
      } else { }
    });
  }

}

