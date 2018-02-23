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
    private router: Router, private fb: FormBuilder) {
    this.devoteeSearchCtrl = new FormControl();
  }

  ngOnInit() {
    this.devoteeSearchCtrl.valueChanges
    .debounceTime(400)
    .subscribe(searchTerm => {
      this.filteredDevotees = this.devoteeApi.find<Devotee>(
        {where: {or: [{legalName: {like: '%' + searchTerm + '%'}}, {spiritualName: {like: '%' + searchTerm + '%'}}]}}
      );
    });
  }

  ngOnDestroy() {

  }

  onSubmit() { this.submitted = true; }

  filterDevotees(name?: string)  {
    const pattern = new RegExp('.*' + name + '.*', 'i'); /* case-insensitive RegExp search */
    this.devoteeApi.find<Devotee>({ 'where': {'legalName': { 'like': 'pattern'} } });
  }

  displayFn(devotee?: Devotee): string | undefined {
    return devotee ? (devotee.legalName ? devotee.legalName : '') + 
                      (devotee.spiritualName ? '  |  ' + devotee.spiritualName  : '') : undefined;
  }


  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
