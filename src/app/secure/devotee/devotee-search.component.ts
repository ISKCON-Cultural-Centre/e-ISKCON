import { Component, OnInit } from '@angular/core';
import { Devotee } from '../../shared/sdk/models/Devotee';
import { DevoteeApi } from '../../shared/sdk/services/custom/Devotee';
import { DevoteeSearchSelectService } from '../../shared/services';


import { Router } from '@angular/router';
import { SDKToken } from '../..//shared/sdk';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { debounceTime } from 'rxjs/operators/debounceTime';

@Component({
  selector: 'app-devotee-search',
  templateUrl: './devotee-search.component.html',
  styleUrls: ['./devotee-search.component.css']
})
export class DevoteeSearchComponent implements OnInit {

  devoteeSearchCtrl: FormControl;
  filteredDevotees: Observable<Devotee[]> ;
  devotees: Devotee[];
  submitted = false;

  constructor(private devoteeApi: DevoteeApi, 
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private router: Router, private fb: FormBuilder) {
    this.devoteeSearchCtrl = new FormControl();
  }

  ngOnInit() {
    this.devoteeSearchCtrl.valueChanges.filter(term => term !== '')
    .debounceTime(400)
    .subscribe(searchTerm => {
      this.filteredDevotees = this.devoteeApi.find<Devotee>(
        {
          where: {
            or: [
              {legalName: {like: '%' + searchTerm + '%'}}, 
              {spiritualName: {like: '%' + searchTerm + '%'}},
              {mobileNo: {like: '%' + searchTerm + '%'}}
            ]
          },
          limit: 20
        }
      );
    });
  }

  onSelectionChanged(devotee: Devotee) {
    this.devoteeSearchSelectService.announceMission(devotee);
  }

  onSubmit() { this.submitted = true; }

  filterDevotees(name?: string)  {
    const pattern = new RegExp('.*' + name + '.*', 'i'); /* case-insensitive RegExp search */
    this.devoteeApi.find<Devotee>({ 'where': {'legalName': { 'like': 'pattern'} } });
  }

  displayFn(devotee?: Devotee): string | undefined {
    return devotee ? (devotee.spiritualName ? devotee.spiritualName : devotee.legalName) : undefined;
  }


  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
