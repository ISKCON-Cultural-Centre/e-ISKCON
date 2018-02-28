import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

import { ServiceRoleMapping } from '../shared/sdk/models';
import { DevoteeApi, ServiceRoleMappingApi, ServiceRole, ServiceRoleApi } from '../../../src/app/shared/sdk';
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

  roles: ServiceRole[] = [];
  fruits = [];

  constructor(
    private devoteeApi: DevoteeApi,
    private serviceRoleApi: ServiceRoleApi,
    private serviceRoleMappingApi: ServiceRoleMappingApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
/*     this.devoteeForm = this.fb.group({
      legalName: ['', Validators.required],
      circleId: '',
      spiritualName: '',
      gender: '',
      creditLimit: '',
      email: '',
      gothra: '',
      nakshatra: '',
      governmentUniqueId: '',
      incomeTaxId: '',
      kcAssociationDate: '',
      motherTongueLanguageId: '',
      dateOfBirth: '',
      dayMonthOfBirth: '',
      lpmId: '',
      asramaMasterId: ''

    }); */
  }

  ngOnInit() {

    this.serviceRoleApi.find<ServiceRole>()
      .subscribe(
        roles => {
          this.roles = roles;
          console.log(roles);
        }
      );

    this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.loadDevoteeRoles(selectedDevotee.option.value.id);
      }
    );

  }


  loadDevoteeRoles(devoteeId: String) {
    this.devoteeApi.getRoles()
    .subscribe(
      devoteeRoles => {
        this.fruits = devoteeRoles.roles.map(function (roleId) {
          return { roleId: roleId.id, roleName: roleId.name };
        });
      }
    );
  }

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}


/* import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, AsramaMaster, AsramaMasterApi, ServiceRole
} from '../../../src/app/shared/sdk';
import { AuthService, DevoteeSearchSelectService } from '../shared/services';


@Component({
  selector: 'app-devotee-role',
  templateUrl: './devotee-role.component.html',
  styleUrls: ['./devotee-role.component.css'],
  providers: [DevoteeSearchSelectService]
})
export class DevoteeRoleComponent implements OnInit {

  devoteeId: String;
  devotee: Devotee;
  submitted = false;
  devoteeRoleForm: FormGroup;

  filteredRoles: Observable<ServiceRole[]>;


  constructor(private devoteeApi: DevoteeApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {
    this.createForm();
  }



  ngOnInit() {

    this.loadDevotee(this.devoteeId);

    this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.devoteeId = selectedDevotee.option.value.id;
        this.loadDevotee(selectedDevotee.option.value.id);
      }
    );


    this.asramaMasterApi.find<AsramaMaster>()
      .subscribe(
        asramas => {
          this.asramas = asramas;
        }
      );


  }

  loadDevotee(devoteeId: String) {
    this.devoteeApi.findById<Devotee>(this.devoteeId)
    .subscribe(
      devotee => {
        this.devoteeRoleForm.setValue(
          {
            legalName: devotee.legalName,
            spiritualName: devotee.spiritualName,
            circleId: devotee.circleId,
            gender: devotee.gender,
            email: devotee.email,
            gothra: devotee.gothra ? devotee.gothra : '',
            creditLimit: devotee.creditLimit,
            nakshatra: devotee.nakshatra ? devotee.nakshatra : '',
            governmentUniqueId: devotee.governmentUniqueId,
            incomeTaxId: devotee.incomeTaxId,
            kcAssociationDate: devotee.kcAssociationDate,
            motherTongueLanguageId: devotee.motherTongueLanguageId,
            lpmId: devotee.lpmId,
            dateOfBirth: devotee.dateOfBirth,
            dayMonthOfBirth: devotee.dayMonthOfBirth,
            asramaMasterId: devotee.asramaMasterId
          }
        );
      }
    );
  }

  createForm() {
    this.devoteeForm = this.fb.group({
      legalName: ['', Validators.required],
      circleId: '',
      spiritualName: '',
      gender: '',
      creditLimit: '',
      email: '',
      gothra: '',
      nakshatra: '',
      governmentUniqueId: '',
      incomeTaxId: '',
      kcAssociationDate: '',
      motherTongueLanguageId: '',
      dateOfBirth: '',
      dayMonthOfBirth: '',
      lpmId: '',
      asramaMasterId: ''

    });
  }

}
 */