import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

import { DepartmentCalendarApi, DepartmentCalendar } from '../..//shared/sdk';

@Injectable()
export class EventService {
    events: DepartmentCalendar[];
    loopBackFilter: LoopBackFilter = {};
    constructor(private departmentCalendarApi: DepartmentCalendarApi) {}

    public getCurrentEvents(): Observable<any> {
    this.loopBackFilter.where = {'startTime': {gte: new Date()}};
    //this.loopBackFilter.include = ['fkDepartmentAnnouncementDepartment1rel'];
    //this.loopBackFilter.order = ['validUntil DESC'];
    return this.departmentCalendarApi.find<DepartmentCalendar>(this.loopBackFilter);
    }
}
