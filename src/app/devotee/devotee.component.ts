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
  selector: 'app-home',
  templateUrl: './devotee.component.html',
  styleUrls: ['./devotee.component.css']
})
export class DevoteeComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  signupForm: FormGroup; // Declare the signupForm 

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];





  devotees: Devotee[] = [];
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

    // getErrorMessage() {
    //   return this.email.hasError('required') ? 'You must enter a value' :
    //       this.email.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }
  ngOnInit() {
  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  onSubmit() { this.submitted = true; }
  getAllDevotees() {
    this.devoteeApi.find()
      .subscribe((devotees) => {
        console.log(devotees);
      }, err => {
        alert(err && err.message ? err.message : 'Fetching Devotees Failed');
      });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}
