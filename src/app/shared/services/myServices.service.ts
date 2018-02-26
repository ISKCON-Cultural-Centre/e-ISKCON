import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DevoteeApi } from '../sdk';
import { Department, TaskMaster } from '../sdk/models';





@Injectable()
export class MyServicesService {

  constructor(
     private devoteeApi: DevoteeApi
    ) { }

  getAuthorizedDepartments(): Observable<Department[]> {
    return this.devoteeApi.getDepartments()
    .map(res => { return res.departments.map(department => new Department(department));
      }); 
  }

  getAuthorizedTasks(): Observable<TaskMaster[]> {
    return this.devoteeApi.getRoleTasks()
    .map(res => { return res.tasks.map(task => new TaskMaster(task));
      }); 
  } 
  }
