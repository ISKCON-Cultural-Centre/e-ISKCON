import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import * as _ from 'underscore';

import { ServiceRoleMapping, ServiceRole  } from '../shared/sdk/models';
import { DevoteeApi, ServiceRoleMappingApi, ServiceRoleApi } from '../../../src/app/shared/sdk';
import { AuthService, DevoteeSearchSelectService } from '../shared/services';
/**
 * @title Role Mappings
 */
@Component({
  selector: 'app-devotee-role',
  templateUrl: './devotee-role.component.html',
  styleUrls: ['./devotee-role.component.css'],
  providers: [DevoteeSearchSelectService]
})
export class DevoteeRoleComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];


  availableRoles: ServiceRole[] = [];
  assignedRoles: ServiceRole[] = [];

  constructor(
    private devoteeApi: DevoteeApi,
    private serviceRoleApi: ServiceRoleApi,
    private serviceRoleMappingApi: ServiceRoleMappingApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private fb: FormBuilder
  ) {
  }

 
  ngOnInit() {

    this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.loadDevoteeRoles(selectedDevotee.option.value.id);
        this.serviceRoleApi.find<ServiceRole>()
        .subscribe(
          roles => {
            this.availableRoles = roles;
          }
        );        
      }
    );

  }


  loadDevoteeRoles(devoteeId: String) {
    this.devoteeApi.getRoles()
    .subscribe(
      devoteeRoles => {
        console.log(devoteeRoles);
        this.assignedRoles = devoteeRoles.roles;
      }
    );
  }

  addRole(role: ServiceRole): void {
     const index = this.availableRoles.indexOf(role);
     this.assignedRoles.push(role);

    if (index >= 0) {
      this.availableRoles.splice(index, 1);
    }

  }

  removeRole(role: ServiceRole): void {
    const index = this.assignedRoles.indexOf(role);

    if (index >= 0) {
      this.assignedRoles.splice(index, 1);
    }

    this.availableRoles.push(role);
    this.availableRoles = _.uniq(this.availableRoles);

  }
}
