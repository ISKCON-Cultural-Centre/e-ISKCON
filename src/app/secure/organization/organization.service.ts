import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';

import { OrganizationApi, Organization } from '../../shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class OrganizationService {

    constructor(private organizationApi: OrganizationApi) {}

    findOrgs(loopBackFilter: LoopBackFilter, pageIndex?: number, pageSize?: number):  Observable<Organization[]> {
        if (pageSize) {
            loopBackFilter.limit = pageSize;
            loopBackFilter.skip = pageIndex * pageSize;
        }
        //console.log(devoteeFilter);
        return this.organizationApi.find(loopBackFilter);
    }
}
