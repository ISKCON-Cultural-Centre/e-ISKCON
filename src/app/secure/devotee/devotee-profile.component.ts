import { Component, Input, OnInit, OnDestroy, AfterViewInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import {MatDialog,  MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress,
  } from '../..//shared/sdk';
import { AuthService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';


@Component({
  selector: 'app-devotee-profile',
  templateUrl: './devotee-profile.component.html',
  styleUrls: ['./devotee-profile.component.css']
})
export class DevoteeProfileComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() devoteeId: String;
  @Input() editMode: boolean;
  @Input() newDevotee = false;
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

  submitted = false;
  devoteeForm: FormGroup;
  circles: Circle[];
  filteredGothras: Observable<GothraMaster[]>;
  filteredNakshatras: Observable<NakshatraMaster[]>;
  filteredProfessions: Observable<ProfessionMaster[]>;
  physicalAddress:  PhysicalAddress;
  languages: Language[];
  asramas: AsramaMaster[];

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor(
    private notificationService: NotificationService,
    private devoteeApi: DevoteeApi,
    private circleApi: CircleApi,
    private gothraMasterApi: GothraMasterApi,
    private nakshatraMasterApi: NakshatraMasterApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private professionMasterApi: ProfessionMasterApi,
    private router: Router,
    private authService: AuthService,
    private physicalAddressApi: PhysicalAddressApi,
/*     private dialogRef: MatDialogRef<DevoteeProfileComponent>,
    @Inject(MAT_DIALOG_DATA) data, */
    private fb: FormBuilder) {
    this.createForm();
/*     if (data) {
      this.devoteeId = data.id;
    } */
  }



  ngOnInit() {

    this.devoteeForm.disable();
    /*     this.editMode = true; */
    if (this.editMode === true || this.newDevotee === true){
      this.devoteeForm.enable();
    }

    if (this.newDevotee) {
    } else {
      if (this.devoteeId) {
        this.loadDevotee(this.devoteeId);
      } else {
        this.devoteeId = this.authService.getCurrentUserId();
        this.loadDevotee(this.devoteeId);  
      }
    }


    this.two$ = this.devoteeForm.get('gothra').valueChanges
      .distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
          { where: { gothra: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.three$ = this.devoteeForm.get('nakshatra').valueChanges
      .distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredNakshatras = this.nakshatraMasterApi.find<NakshatraMaster>(
          { where: { nakshatra: { like: '%' + searchTerm + '%' } } }
        );
      });

      this.four$ = this.devoteeForm.get('professionId').valueChanges
      .distinctUntilChanged()
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

  ngAfterViewInit() {

  }

  loadDevotee(devoteeId: String) {
    this.eight$ = this.devoteeApi.findById<Devotee>(devoteeId, {include: 'fkDevoteePhysicalAddress1rel'})
    .subscribe(
      devotee => {
        this.physicalAddress = devotee.fkDevoteePhysicalAddress1rel;
        this.setDevoteeFormValues(devotee);
      }
    );
  }

  setDevoteeFormValues(devotee) {
    this.devoteeForm.setValue(
      {
        id: devotee.id,
        legalName: devotee.legalName,
        spiritualName: devotee.spiritualName,
        circleId: devotee.circleId,
        gender: devotee.gender,
        email: devotee.email,
        gothra: devotee.gothra ? devotee.gothra : null,
        creditLimit: devotee.creditLimit,
        nakshatra: devotee.nakshatra ? devotee.nakshatra : null,
        governmentUniqueId: devotee.governmentUniqueId,
        incomeTaxId: devotee.incomeTaxId,
        kcAssociationDate: devotee.kcAssociationDate,
        motherTongueLanguageId: devotee.motherTongueLanguageId,
        lpmId: devotee.lpmId,
        dateOfBirth: devotee.dateOfBirth,
        dayMonthOfBirth: 'a',
        asramaMasterId: devotee.asramaMasterId,
        professionId: devotee.professionId,
        physicalAddressId: devotee.physicalAddressId,
        mobileNo: devotee.mobileNo,
        landlineNo: devotee.landlineNo
      }
    );
  }

  createForm() {
    this.devoteeForm = this.fb.group({
      id: null,
      legalName: [null, Validators.required],
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
    });
  }

  addDevotee() {
    this.setStep(0);
    if (!this.devoteeForm.get('spiritualName').value) {
      this.devoteeForm.setValue(
        {
          spiritualName: this.devoteeForm.get('legalName').value,
        }
      );
    }    
    this.eleven$ = this.devoteeApi.create<Devotee>(this.devoteeForm.value)
    .subscribe(
      devotee => {
        this.setDevoteeFormValues(devotee);
        this.devoteeForm.reset();
        this.notificationService.notificationSubject.next('New Devotee [' + devotee.legalName + '] created successfully');
      }
    );    
  }

  editDevotee(){
     this.editMode = true;
     this.devoteeForm.enable();
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
    this.eight$ = this.devoteeApi.patchAttributes(this.devoteeId, this.devoteeForm.value)
     .subscribe(
       devotee => {
         this.editMode = false;
         this.devoteeForm.disable();
         this.notificationService.notificationSubject.next('Profile updated successfully');
       }
     )
   }
 
   reset() {
      this.devoteeForm.reset();
      this.physicalAddress = null;
      this.devoteeForm.setValue(
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
}