import { Component, OnInit,  } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { DevoteeSearchSelectService } from '../shared/services';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './devotee.component.html',
  styleUrls: ['./devotee.component.css'],
  providers: [DevoteeSearchSelectService]
})
export class DevoteeComponent implements OnInit {



  constructor(
    private devoteeSearchSelectService: DevoteeSearchSelectService
  ) {
  }

  ngOnInit() {

  }


  addDevotee() {
    this.devoteeSearchSelectService.announceMission(new MatAutocompleteSelectedEvent(null, null));
   }


}
