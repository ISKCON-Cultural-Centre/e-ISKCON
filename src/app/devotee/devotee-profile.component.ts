import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';
import {MatDialog} from '@angular/material';

import { DialogBoxComponent } from '../shared/components/dialog-box/dialog-box.component';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress,
  } from '../../../src/app/shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../shared/sdk/services/index';


@Component({
  selector: 'app-devotee-profile',
  templateUrl: './devotee-profile.component.html',
  styleUrls: ['./devotee-profile.component.css']
})
export class DevoteeProfileComponent implements OnInit {

  devoteeId: String;
  devotee: Devotee;

  one$;
  two$;
  three$;
  four$;
  five$;
  six$;
  seven$
  eight$
  nine$
  ten$

  stateCtrl: FormControl;
  filteredStates: Observable<Devotee[]>;
  submitted = false;
  devoteeForm: FormGroup;
  circles: Circle[];
  filteredGothras: Observable<GothraMaster[]>;
  filteredNakshatras: Observable<NakshatraMaster[]>;
  filteredProfessions: Observable<ProfessionMaster[]>;
  physicalAddress:  PhysicalAddress;
  languages: Language[];
  asramas: AsramaMaster[];


  constructor(
    private notificationService: NotificationService,
    private devoteeApi: DevoteeApi,
    private circleApi: CircleApi,
    private gothraMasterApi: GothraMasterApi,
    private nakshatraMasterApi: NakshatraMasterApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private professionMasterApi: ProfessionMasterApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private router: Router,
    private authService: AuthService,
    private physicalAddressApi: PhysicalAddressApi,
    private fb: FormBuilder) {
    this.createForm();
  }



  ngOnInit() {

    this.devoteeId ? this.devoteeId = this.devoteeId : this.devoteeId = this.authService.getCurrentUserId();
    this.loadDevotee(this.devoteeId);

    this.one$ = this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.devoteeId = selectedDevotee.option.value.id;
        this.loadDevotee(selectedDevotee.option.value.id);
      }
    );


    this.two$ = this.devoteeForm.get('gothra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
          { where: { gothra: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.three$ = this.devoteeForm.get('nakshatra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredNakshatras = this.nakshatraMasterApi.find<NakshatraMaster>(
          { where: { nakshatra: { like: '%' + searchTerm + '%' } } }
        );
      });

      this.four$ = this.devoteeForm.get('professionId').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredProfessions = this.professionMasterApi.find<ProfessionMaster>(
          { where: { professionName: { like: '%' + searchTerm + '%' } } }
        );
      });

      this.five$ = this.asramaMasterApi.find<AsramaMaster>()
      .subscribe(
        asramas => {
          this.asramas = asramas;
        }
      );

      this.six$ = this.circleApi.find<Circle>()
      .subscribe(
        circles => {
          this.circles = circles;
        }
      );

      this.seven$ = this.languageApi.find<Language>()
      .subscribe(languages => {
        this.languages = languages;
      }
      );

  }

  loadDevotee(devoteeId: String) {
    this.eight$ = this.devoteeApi.findById<Devotee>(devoteeId, {include: 'fkDevoteePhysicalAddress1rel'})
    .subscribe(
      devotee => {
        this.physicalAddress = devotee.fkDevoteePhysicalAddress1rel;
        this.devoteeForm.setValue(
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
    this.devoteeForm = this.fb.group({
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
    this.devoteeForm = this.fb.group({
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
    this.nine$ = this.devoteeApi.patchAttributes(this.devoteeId, this.devoteeForm.value)
    .subscribe(
      devotee => {
        this.notificationService.notificationSubject.next('Profile updated successfully');
      }
    )
  }

  reset() {
    this.devoteeForm.reset();
  }

  updateDevoteeAddressId(addressId)  {
    console.log(addressId);
    this.ten$ = this.devoteeApi.patchAttributes(this.devoteeId, {physicalAddressId: addressId} )
    .subscribe(test => console.log(test))
  }

  displayFn(profession?: ProfessionMaster): string | undefined {
    return profession ? profession.professionName : '';
  }

   ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
    this.five$.unsubscribe();
    this.six$.unsubscribe();
    this.seven$.unsubscribe();
    this.eight$.unsubscribe();
    this.nine$.unsubscribe();
    this.ten$.unsubscribe();
   }
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
