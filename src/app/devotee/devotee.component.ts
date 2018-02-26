import { Component, OnInit } from '@angular/core';

import { DevoteeSearchSelectService } from '../shared/services';

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


  onSubmit() { }


}
