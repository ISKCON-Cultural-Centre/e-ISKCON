import { Component, OnInit } from '@angular/core';

import { Devotee, DevoteeServiceInterest, ServiceArea  } from '../../shared/sdk/models';
import { DevoteeApi, DevoteeServiceInterestApi, ServiceAreaApi } from '../../shared/sdk';

import { DevoteeServiceInterestComponent } from './devotee-service-interest.component';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../../shared/services';

@Component({
  selector: 'app-devotee-service',
  templateUrl: './devotee-service.component.html',
  styleUrls: ['./devotee-service.component.css']
})
export class DevoteeServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
