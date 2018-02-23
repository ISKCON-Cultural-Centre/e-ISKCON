import { Component, OnInit } from '@angular/core';
import { Devotee } from '../shared/sdk/models/Devotee';
import { DevoteeApi } from '../shared/sdk/services/custom/Devotee';
import { Router } from '@angular/router';
import { SDKToken } from '../../../src/app/shared/sdk';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-devotee-profile',
  templateUrl: './devotee-profile.component.html',
  styleUrls: ['./devotee-profile.component.css']
})
export class DevoteeProfileComponent implements OnInit {


  stateCtrl: FormControl;
  filteredStates: Observable<Devotee[]> ;
  filteredDevotees: Observable<Devotee[]> ;
  signupForm: FormGroup; // Declare the signupForm 

  
  devotees: Devotee[];

  motherTounges = [
    { value: 'tel', viewValue: 'Telugu' },
    { value: 'Kan', viewValue: 'Kannda' },
    { value: 'Tam', viewValue: 'Tamil' },
    { value: 'Eng', viewValue: 'English' }
  ];
  model: Devotee;

  submitted = false;

  email = new FormControl('', [
    Validators.required]);
  shikshaLevel = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [
    Validators.required]);

  constructor(private devoteeApi: DevoteeApi,
    private router: Router, private fb: FormBuilder) {
    this.stateCtrl = new FormControl();

    this.stateCtrl.valueChanges
    .debounceTime(400)
    .subscribe(searchTerm => {
      this.filteredDevotees = this.devoteeApi.find<Devotee>(
        {where: {or: [{legalName: {like: '%' + searchTerm + '%'}}, {spiritualName: {like: '%' + searchTerm + '%'}}]}}
      );

    });
  }

  ngOnInit() {
  }

  filterStates(name: string) {

  }
  onSubmit() { this.submitted = true; }

  filterDevotees(name?: string)  {
    const pattern = new RegExp('.*' + name + '.*', 'i'); /* case-insensitive RegExp search */
    this.devoteeApi.find<Devotee>({ 'where': {'legalName': { 'like': 'pattern'} } });
/*       .subscribe((devotees) => {
        console.log(devotees);
      }, err => {
        alert(err && err.message ? err.message : 'Fetching Devotees Failed');
      }); */
  }

  displayFn(devotee?: Devotee): string | undefined {
    return devotee ? (devotee.legalName ? devotee.legalName : '') + 
                      (devotee.spiritualName ? '  |  ' + devotee.spiritualName  : '') : undefined;
  }


  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
