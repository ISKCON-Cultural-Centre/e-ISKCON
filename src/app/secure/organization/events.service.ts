import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';

import { DepartmentEventApi, DepartmentEvent } from '../..//shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class EventsService {

    constructor(private departmentEventApi: DepartmentEventApi) {}

    findEvents(loopBackFilter: LoopBackFilter, pageIndex?: number, pageSize?: number):  Observable<DepartmentEvent[]> {
        if (pageSize) {
            loopBackFilter.limit = pageSize;
            loopBackFilter.skip = pageIndex * pageSize;
        }
        //console.log(devoteeFilter);
        return this.departmentEventApi.find(loopBackFilter);
    }
}
