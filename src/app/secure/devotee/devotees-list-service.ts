import {Injectable, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { DevoteeApi, Devotee } from '../..//shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class DevoteesListService {

    constructor(private devoteeApi: DevoteeApi) {}

    findDevotees(devoteeFilter: LoopBackFilter, pageIndex:number, pageSize:number):  Observable<Devotee[]> {
        //devoteeFilter.order = 10;
        devoteeFilter.limit = pageSize;
        devoteeFilter.skip = pageIndex * pageSize;

        return this.devoteeApi.find(devoteeFilter);
    }
}
