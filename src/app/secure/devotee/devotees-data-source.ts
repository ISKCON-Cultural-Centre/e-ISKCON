import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { Observable, BehaviorSubject, of } from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

import { DevoteeApi, Devotee } from '../..//shared/sdk';
import { DevoteesListService } from './devotees-list-service';
import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';

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

    loadDevotees(devoteeFilter: LoopBackFilter,
                pageIndex:number,
                pageSize:number) {

        this.loadingSubject.next(true);

        this.devoteesListService.findDevotees(devoteeFilter,
                pageIndex,
                pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(devotees => 
            {
                this.devoteesSubject.next(devotees);
            }
        );
}

}