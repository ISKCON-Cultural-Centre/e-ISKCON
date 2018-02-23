import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SDKToken } from '../../../src/app/shared/sdk';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

import { Devotee } from '../shared/sdk/models/Devotee';
import { DevoteeApi } from '../shared/sdk/services/custom/Devotee';
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
  filteredStates: Observable<Devotee[]> ;  
  submitted = false;

  personalForm = new FormGroup ({
    name: new FormControl()
  });


  email = new FormControl('', [
    Validators.required]);
  shikshaLevel = new FormControl('', [Validators.required, Validators.email]);

  constructor(private devoteeApi: DevoteeApi,
    private router: Router, 
    private authService: AuthService,    
    private fb: FormBuilder) {

  }

  ngOnInit() {
    //devoteeId = this.authService.getCurrentUserId;
    console.log(this.authService.getCurrentUserId());
    this.devoteeApi.findById<Devotee>(this.authService.getCurrentUserId())
    .subscribe( devotee => {this.devotee = devotee; console.log(devotee);});
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: '', // <--- the FormControl called "name"
    });  


  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

}
