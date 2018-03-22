import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import {MatDialog} from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress,
  } from '../..//shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';

@Component({
  selector: 'app-devotee-filter',
  templateUrl: './devotee-filter.component.html',
  styleUrls: ['./devotee-filter.component.css']
})
export class DevoteeFilterComponent implements OnInit {


  devoteeId: String;
  devotee: Devotee;

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();
  six$ = new Subscription();
  seven$ = new Subscription();
  eight$ = new Subscription();
  nine$ = new Subscription();
  ten$ = new Subscription();
  eleven$ = new Subscription();
  twelve$ = new Subscription();

  currentDevoteeId = new Subject<String>();
  currentDevoteeId$ = this.currentDevoteeId.asObservable();
  submitted = false;
  devoteeFilterForm: FormGroup;
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

  /*** create a form 
   * initialize the form - DONE
   * build the html template - 
   * build WHERE conditions from the form values
   * emit event with the WHERE condition
   * devotee-list component consumes the WHERE and emits event with devotee id
   * devotee-detail component display all relevant data of devotee as a CARD
   *
   * 
   * 
  */


  ngOnInit() {

    this.devoteeId ? this.devoteeId = this.devoteeId : this.devoteeId = this.authService.getCurrentUserId();
    this.currentDevoteeId.next(this.devoteeId);
    this.loadDevotee(this.devoteeId);
    this.currentDevoteeId.next(this.devoteeId);


    this.one$ = this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        if (selectedDevotee.option != null) {
          this.currentDevoteeId.next(selectedDevotee.option.value.id);
          this.loadDevotee(selectedDevotee.option.value.id);
        } else {
          this.reset();
        }
      }
    );

    this.twelve$ = this.currentDevoteeId$
    .subscribe(
      devoteeId => 
      {
        this.devoteeId = devoteeId;
      }
    );

      this.four$ = this.devoteeFilterForm.get('professionId').valueChanges
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

  createForm() {
    this.devoteeFilterForm = this.fb.group({
      name: null,
      circleId: null,
      gender: null,
      languageId: null,
      asramaMasterId: null,
      professionId: null,
      shikshaLevel: null
    });
  }

  loadDevotee(devoteeId: String) {
    this.eight$ = this.devoteeApi.findById<Devotee>(devoteeId, {include: 'fkDevoteePhysicalAddress1rel'})
    .subscribe(
      devotee => {
        this.physicalAddress = devotee.fkDevoteePhysicalAddress1rel;
      }
    );
  }



  addDevotee() {
    console.log(this.devoteeFilterForm.value);
    this.eleven$ = this.devoteeApi.create<Devotee>(this.devoteeFilterForm.value)
    .subscribe(
      devotee => {
        this.currentDevoteeId.next(devotee.id);
        this.notificationService.notificationSubject.next('New Devotee [' + devotee.legalName + '] created successfully');
      }
    );    
  }

  updateDevoteeAddressId(addressId)  {
    console.log(addressId);
    console.log(this.devoteeId);
   this.nine$ = this.devoteeApi.patchAttributes(this.devoteeId, {physicalAddressId: addressId} )
    .subscribe();
  }

  displayFn(profession?: ProfessionMaster): string | undefined {
    return profession ? profession.professionName : '';
  }

  save() {
    this.eight$ = this.devoteeApi.patchAttributes(this.devoteeId, this.devoteeFilterForm.value)
     .subscribe(
       devotee => {
         this.notificationService.notificationSubject.next('Profile updated successfully');
       }
     )
   }
 
   reset() {
      this.devoteeFilterForm.reset();
      this.currentDevoteeId.next(null);
      this.physicalAddress = null;
      this.devoteeFilterForm.setValue(
        {
          id: null,
          legalName: null,
          circleId: null,
          spiritualName: null,
          gender: null,
          creditLimit: 0,
          email: null,
          gothra: null,
          nakshatra: null,
          governmentUniqueId: null,
          incomeTaxId: null,
          kcAssociationDate: null,
          motherTongueLanguageId: null,
          dateOfBirth: null,
          dayMonthOfBirth: 'a',
          lpmId: null,
          asramaMasterId: null,
          professionId: null,
          physicalAddressId: null,
          mobileNo: null,
          landlineNo: null
        }
      );
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
    this.eleven$.unsubscribe();
    this.twelve$.unsubscribe();    
   }
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }


}
