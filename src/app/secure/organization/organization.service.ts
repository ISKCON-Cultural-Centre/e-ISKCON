import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { OrganizationApi, Organization } from '../../shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class OrganizationService {

    constructor(private organizationApi: OrganizationApi) {}

    findEvents(loopBackFilter: LoopBackFilter, pageIndex?: number, pageSize?: number):  Observable<Organization[]> {
        if (pageSize) {
            loopBackFilter.limit = pageSize;
            loopBackFilter.skip = pageIndex * pageSize;
        }
        //console.log(devoteeFilter);
        return this.organizationApi.find(loopBackFilter);
    }
}
