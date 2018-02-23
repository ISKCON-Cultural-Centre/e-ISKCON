import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { SDKToken, DevoteeApi, GothraMasterApi,
        NakshatraMasterApi, CircleApi, Devotee, Circle,
        GothraMaster, NakshatraMaster } from '../../../src/app/shared/sdk';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-devotee-profile',
  templateUrl: './devotee-profile.component.html',
  styleUrls: ['./devotee-profile.component.css']
})
export class DevoteeProfileComponent implements OnInit {

  @Input() devoteeId: String;
  devotee: Devotee;

  stateCtrl: FormControl;
  filteredStates: Observable<Devotee[]>;
  submitted = false;
  devoteeForm: FormGroup;
  circles: Circle[];
  filteredGothras: Observable<GothraMaster[]>;
  filteredNakshatras: Observable<NakshatraMaster[]>;


  constructor(private devoteeApi: DevoteeApi,
    private circleApi: CircleApi,
    private gothraMasterApi: GothraMasterApi,
    private nakshatraMasterApi: NakshatraMasterApi,
    private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder) {
      this.createForm();
    }


  ngOnInit() {

    this.devoteeForm.get('gothra').valueChanges
    .debounceTime(400)
    .subscribe(searchTerm => {
      this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
        {where: {gothra: {like: '%' + searchTerm + '%'}}}
      );
    });

    this.devoteeForm.get('nakshatra').valueChanges
    .debounceTime(400)
    .subscribe(searchTerm => {
      this.filteredNakshatras = this.nakshatraMasterApi.find<NakshatraMaster>(
        {where: {nakshatra: {like: '%' + searchTerm + '%'}}}
      );
    });


    this.circleApi.find<Circle>()
    .subscribe( circles => {
      this.circles = circles;
      }
    );

    this.devoteeApi.findById<Devotee>(this.authService.getCurrentUserId())
    .subscribe( devotee => {
      this.devotee = devotee;
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
      lpmId: ''
    });
  }

 

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
