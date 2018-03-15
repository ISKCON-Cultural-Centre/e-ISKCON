import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import * as _ from 'underscore';
import {  difference } from 'set-manipulator';

import { ServiceRoleMapping, ServiceRole  } from '../shared/sdk/models';
import { DevoteeApi, ServiceRoleMappingApi, ServiceRoleApi } from '../../../src/app/shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../shared/services';
/**
 * @title Role Mappings
 */
@Component({
  selector: 'app-devotee-role',
  templateUrl: './devotee-role.component.html',
  styleUrls: ['./devotee-role.component.css'],
  providers: [DevoteeSearchSelectService]
})
export class DevoteeRoleComponent implements OnInit, OnDestroy {

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  devoteeId: String = null;
  allRoles = [];
  remainingRoles = [];
  assignedRoles = [];

  constructor(
    private notificationService: NotificationService,
    private devoteeApi: DevoteeApi,
    private serviceRoleApi: ServiceRoleApi,
    private serviceRoleMappingApi: ServiceRoleMappingApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private fb: FormBuilder
  ) {
  }

 
  ngOnInit() {
    this.one$ = this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.loadDevoteeRoles(selectedDevotee.option.value.id);
        this.devoteeId = selectedDevotee.option.value.id;
      }
    );

  }


  loadAllRoles() {
    this.two$ = this.serviceRoleApi.find<ServiceRole>()
    .subscribe(
      roles => {
        this.allRoles = roles;
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
      }
    );
  }

/*   loadDevoteeRoles(devoteeId: String) {
    this.three$ = this.devoteeApi.getRoles()
    .subscribe(
      devoteeRoles => {
        this.assignedRoles = devoteeRoles.roles;
        this.loadAllRoles();
      }
    );
  } */

  loadDevoteeRoles(devoteeId: String) {
    this.three$ =  this.serviceRoleMappingApi.find<ServiceRoleMapping>(
      { 
        where: {principalType: 'USER', principalId: devoteeId},
        include: {
          relation: 'ServiceRole'
        }
      }
    )
    .subscribe(
      devoteeRoles => {
        this.assignedRoles = devoteeRoles.map((role) => role.ServiceRole);
        this.loadAllRoles();
      }
    );
  }


  addRole(role: ServiceRole): void {
    this.four$ = this.serviceRoleMappingApi.create({principalType: 'USER', principalId: this.devoteeId, roleId: role.id})
     .subscribe(
       devoteeRole => {
        this.assignedRoles.push(role);
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
        this.notificationService.notificationSubject.next('Role added successfully');
       }
     );
  }

  removeRole(role: ServiceRole): void {
    this.five$ = this.serviceRoleMappingApi.destroyAll({principalId: this.devoteeId, principalType: 'USER', roleId: role.id})
    .subscribe(
      devoteeRole => {
        const index = this.assignedRoles.indexOf(role);
        if (index >= 0) {
          this.assignedRoles.splice(index, 1);
        }
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
       this.notificationService.notificationSubject.next('Role deleted successfully');
      }
    );
  }

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
    this.five$.unsubscribe();
   }

}
