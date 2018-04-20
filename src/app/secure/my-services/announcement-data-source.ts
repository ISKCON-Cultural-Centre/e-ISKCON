import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import { DepartmentAnnouncementApi, DepartmentAnnouncement } from '../..//shared/sdk';
import { AnnouncementListService } from './announcement-list-service';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

export class AnnouncementDataSource implements DataSource<DepartmentAnnouncement> {

    private anouncementSubject = new BehaviorSubject<DepartmentAnnouncement[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private devoteesListService: AnnouncementListService) {}

    connect(collectionViewer: CollectionViewer): Observable<DepartmentAnnouncement[]> {
        return this.anouncementSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.anouncementSubject.complete();
        this.loadingSubject.complete();
    }

    loadAnnouncements(announcementFilter: LoopBackFilter,
                pageIndex: number,
                pageSize: number) {

        this.loadingSubject.next(true);
        console.log(announcementFilter);
        this.devoteesListService.findAnnouncements(announcementFilter,
                pageIndex,
                pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(announcements => 
            {
                //console.log(announcements);
                this.anouncementSubject.next(announcements);
            }
        );
}

}