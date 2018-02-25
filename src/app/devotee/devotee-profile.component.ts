import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';

import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, AsramaMaster, AsramaMasterApi
} from '../../../src/app/shared/sdk';
import { AuthService, DevoteeSearchSelectService } from '../shared/services';


@Component({
  selector: 'app-devotee-profile',
  templateUrl: './devotee-profile.component.html',
  styleUrls: ['./devotee-profile.component.css']
})
export class DevoteeProfileComponent implements OnInit {

  devoteeId: String;
  devotee: Devotee;

  stateCtrl: FormControl;
  filteredStates: Observable<Devotee[]>;
  submitted = false;
  devoteeForm: FormGroup;
  circles: Circle[];
  filteredGothras: Observable<GothraMaster[]>;
  filteredNakshatras: Observable<NakshatraMaster[]>;
  languages: Language[];
  asramas: AsramaMaster[];

  constructor(private devoteeApi: DevoteeApi,
    private circleApi: CircleApi,
    private gothraMasterApi: GothraMasterApi,
    private nakshatraMasterApi: NakshatraMasterApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder) {
    this.createForm();
  }



  ngOnInit() {

    this.devoteeId ? this.devoteeId = this.devoteeId : this.devoteeId = this.authService.getCurrentUserId();
    this.loadDevotee(this.devoteeId);

    this.devoteeSearchSelectService.missionAnnounced$.
    subscribe(
      selectedDevotee => {
        this.devoteeId = selectedDevotee.option.value.id;
        this.loadDevotee(selectedDevotee.option.value.id);
      }
    );


    this.devoteeForm.get('gothra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
          { where: { gothra: { like: '%' + searchTerm + '%' } } }
        );
      });

    this.devoteeForm.get('nakshatra').valueChanges
      //.distinctUntilChanged()
      .subscribe(searchTerm => {
        this.filteredNakshatras = this.nakshatraMasterApi.find<NakshatraMaster>(
          { where: { nakshatra: { like: '%' + searchTerm + '%' } } }
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
    this.devoteeApi.findById<Devotee>(this.devoteeId)
    .subscribe(
      devotee => {
        this.devoteeForm.setValue(
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



  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
