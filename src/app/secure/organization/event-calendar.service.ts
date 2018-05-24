import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

import { DepartmentEventApi, DepartmentEvent } from '../..//shared/sdk';

@Injectable()
export class EventService {
    events: DepartmentEvent[];
    loopBackFilter: LoopBackFilter = {};
    constructor(private departmentCalendarApi: DepartmentEventApi) {}

    public getCurrentEvents(): Observable<any> {
    this.loopBackFilter.where = {'startTime': {gte: new Date()}};
    //this.loopBackFilter.include = ['fkDepartmentAnnouncementDepartment1rel'];
    //this.loopBackFilter.order = ['validUntil DESC'];
    return this.departmentCalendarApi.find<DepartmentEvent>(this.loopBackFilter);
    }
}
