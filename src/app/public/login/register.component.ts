import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import {MatDialog} from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress,
  } from '../../shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../../secure/common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  devoteeId: String;
  devotee: Devotee;

  submitted = false;
  registerForm: FormGroup;
  circles: Circle[];


  constructor(
    private notificationService: NotificationService,
    private devoteeApi: DevoteeApi,
    private circleApi: CircleApi,
    private authService: AuthService,
    private fb: FormBuilder) {
    //this.createForm();
  }

  ngOnInit() {
  }
/* 
  ngOnInit() {

    this.registerForm.get('gothra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
          { where: { gothra: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.registerForm.get('nakshatra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredNakshatras = this.nakshatraMasterApi.find<NakshatraMaster>(
          { where: { nakshatra: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.registerForm.get('professionId').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredProfessions = this.professionMasterApi.find<ProfessionMaster>(
          { where: { professionName: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.asramaMasterApi.find<AsramaMaster>()
      .subscribe(
        asramas => {
          this.asramas = asramas;
        }
      );

    this.circleApi.find<Circle>()
      .subscribe(
        circles => {
          this.circles = circles;
        }
      );

      this.languageApi.find<Language>()
      .subscribe(languages => {
        this.languages = languages;
      }
      );

  }

  loadDevotee(devoteeId: String) {
    this.devoteeApi.findById<Devotee>(devoteeId, {include: 'fkDevoteePhysicalAddress1rel'})
    .subscribe(
      devotee => {
        this.physicalAddress = devotee.fkDevoteePhysicalAddress1rel;
        this.registerForm.setValue(
          {
            id: devotee.id,
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
            dateOfBirth: 'a',
            dayMonthOfBirth: devotee.dayMonthOfBirth,
            asramaMasterId: devotee.asramaMasterId,
            professionId: devotee.professionId,
            physicalAddressId: devotee.physicalAddressId,
            mobileNo: devotee.mobileNo,
            landlineNo: devotee.landlineNo
          }
        );
      }
    );
  }

  createForm() {
    this.registerForm = this.fb.group({
      id: null,
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
      dayMonthOfBirth: 'a',
      lpmId: '',
      asramaMasterId: '',
      professionId: '',
      physicalAddressId: '',
      mobileNo: '',
      landlineNo: ''
    });
  }

  addDevotee() {
    this.registerForm = this.fb.group({
      id: null,
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
      dayMonthOfBirth: 'a',
      lpmId: '',
      asramaMasterId: '',
      professionId: '',
      physicalAddressId: null,
      mobileNo: null,
      landlineNo: null
    });
  }  

  save() {
    this.devoteeApi.patchAttributes(this.devoteeId, this.registerForm.value)
    .subscribe(
      devotee => {
        this.notificationService.notificationSubject.next('Profile updated successfully');
      }
    )
  }

  reset() {
    this.registerForm.reset();
  }

  updateDevoteeAddressId(addressId)  {
    console.log(addressId);
    this.devoteeApi.patchAttributes(this.devoteeId, {physicalAddressId: addressId} )
    .subscribe(test => console.log(test))
  }

  displayFn(profession?: ProfessionMaster): string | undefined {
    return profession ? profession.professionName : '';
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
 */
}
