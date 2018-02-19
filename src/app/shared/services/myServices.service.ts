import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DevoteeApi } from '../sdk';
import { Department } from '../sdk/models/Department';





@Injectable()
export class MyServicesService {

  constructor(
     private devoteeApi: DevoteeApi
    ) { }

  getAuthorizedDepartments(): Observable<Department[]> {
    return this.devoteeApi.getDepartments()
    .map(res => { return res.departments.map(department => new Department(department));
      }); }
  }
