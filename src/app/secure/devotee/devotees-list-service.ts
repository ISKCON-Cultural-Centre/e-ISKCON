import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevoteeApi, Devotee } from '../..//shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class DevoteesListService {
    @Input() devoteeFilter: LoopBackFilter;
    filteredDevoteesCount$: Observable<count>;
    constructor(private devoteeApi: DevoteeApi) {}

    findDevotees():  Observable<Devotee[]> {
        this.devoteeFilter.order = 10;
        this.devoteeFilter.limit = 10;
        this.devoteeFilter.skip = 20;
        this.filteredDevoteesCount$ = this.devoteeApi.count(this.devoteeFilter);
        return this.devoteeApi.find(this.devoteeFilter);
    }
}
