import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DepartmentApi } from '../sdk';
import { Department } from '../sdk/models/Department';





@Injectable()
export class MyServicesService {

  constructor(
     private departmentApi: DepartmentApi 
    ) { }

  getAuthorizedDepartments(): Observable<Department[]> {
    return this.departmentApi.find();
      }

    // return of(MYDEPARTMENTS);
  }
