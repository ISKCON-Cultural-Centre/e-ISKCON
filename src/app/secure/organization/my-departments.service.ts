import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { AuthService } from '../../shared/services';

import { DepartmentApi, Department } from '../..//shared/sdk';

@Injectable()
export class MyDepartmentsService {
    departments: Department[];
    loopBackFilter: LoopBackFilter = {};
    constructor(    private authService: AuthService,
        private departmentApi: DepartmentApi) {}

    public getMyDepartments(): Observable<any> {
    this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    //this.loopBackFilter.include = ['fkDepartmentAnnouncementDepartment1rel'];
    //this.loopBackFilter.order = ['validUntil DESC'];
    return this.departmentApi.find<Department>(this.loopBackFilter);
    }

}
