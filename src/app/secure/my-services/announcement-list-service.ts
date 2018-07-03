import {Injectable, Input} from '@angular/core';
import { Observable } from 'rxjs';

import { DepartmentAnnouncementApi, DepartmentAnnouncement } from '../..//shared/sdk';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

@Injectable()
export class AnnouncementListService {

    constructor(private departmentAnnouncementApi: DepartmentAnnouncementApi) {}

    findAnnouncements(announcementFilter: LoopBackFilter, pageIndex: number, pageSize: number):  Observable<DepartmentAnnouncement[]> {
        announcementFilter.limit = pageSize;
        announcementFilter.skip = pageIndex * pageSize;
        //console.log(announcementFilter);
        return this.departmentAnnouncementApi.find(announcementFilter);
    }
}
