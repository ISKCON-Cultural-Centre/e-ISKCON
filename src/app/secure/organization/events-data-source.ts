import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { DepartmentEventApi, DepartmentEvent } from '../../shared/sdk';
import { EventsService } from './events.service';
import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';

export class EventsDataSource implements DataSource<DepartmentEvent> {

    private eventsSubject = new BehaviorSubject<DepartmentEvent[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private eventsService: EventsService) { }

    connect(): Observable<DepartmentEvent[]> {
        return this.eventsSubject.asObservable();
    }

    disconnect(): void {
        this.eventsSubject.complete();
        this.loadingSubject.complete();
    }

    loadEvents(devoteeFilter: LoopBackFilter) {
        this.loadingSubject.next(true);
        this.eventsService.findEvents(devoteeFilter).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(events => {
                this.eventsSubject.next(events);
            }
            );
    }

}