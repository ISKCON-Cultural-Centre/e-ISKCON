import { Component, Input, OnInit } from '@angular/core';
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

  @Input() devotee: Devotee;

  submitted = false;

  constructor(private devoteeApi: DevoteeApi,
    private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
  }



  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
