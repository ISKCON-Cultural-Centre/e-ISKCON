import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { DevoteeApi } from '../sdk';
import { Department, TaskMaster } from '../sdk/models';





@Injectable()
export class MyServicesService {

  constructor(
     private devoteeApi: DevoteeApi
    ) { }

  getAuthorizedDepartments(): Observable<Department[]> {
    return this.devoteeApi.getDepartments()
    .pipe(map(res => { return res.departments.map(department => new Department(department))}));
  }

  getAuthorizedTasks(): Observable<TaskMaster[]> {
    return this.devoteeApi.getRoleTasks()
    .pipe(map(res => { return res.tasks.map(task => new TaskMaster(task));}));
  }

  }
