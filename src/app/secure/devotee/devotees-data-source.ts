import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, finalize} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

import { DevoteeApi, Devotee } from '../..//shared/sdk';
import { DevoteesListService } from './devotees-list-service';

export class DevoteesDataSource implements DataSource<Devotee> {

    private devoteesSubject = new BehaviorSubject<Devotee[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private devoteesListService: DevoteesListService) {}

    connect(collectionViewer: CollectionViewer): Observable<Devotee[]> {
        return this.devoteesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.devoteesSubject.complete();
        this.loadingSubject.complete();
    }

    loadDevotees(courseId: number, filter = '',
                sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.devoteesListService.findLessons(courseId, filter, sortDirection,
            pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(devotees => this.devoteesSubject.next(devotees));
    }    
}
