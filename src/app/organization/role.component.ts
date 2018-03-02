import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';

import {
  ServiceRole, ServiceRoleApi
} 
from '../../../src/app/shared/sdk';
import { 
  AuthService, NotificationService
} 
from '../shared/services';

import { InlineEditComponent } 
from '../shared/components/inline-edit/inline-edit.component';

import { } from '../shared/'

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  roleForm: FormGroup;

  serviceRoles: ServiceRole[];  

  constructor(
    private notificationService: NotificationService,
    private serviceRoleApi: ServiceRoleApi,
    private fb: FormBuilder
  ) 
  {  
    this.createForm();
  }

  ngOnInit() {
    this.loadRoles();
  }

  createForm() {
    this.roleForm = this.fb.group({
      id: ['', Validators.required],      
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  
  loadRoles() {
    this.serviceRoleApi.find<ServiceRole>()
    .subscribe(
      roles => {
        this.serviceRoles = roles;
      }
    )
  }  

}




