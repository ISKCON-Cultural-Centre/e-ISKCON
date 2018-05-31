import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { OrganizationApi, Organization } from '../../shared/sdk';
import { OrganizationService } from './organization.service';
import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';

export class OrganizationDataSource implements DataSource<Organization> {

    private organizationSubject = new BehaviorSubject<Organization[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private organizationService: OrganizationService) { }

    connect(): Observable<Organization[]> {
        return this.organizationSubject.asObservable();
    }

    disconnect(): void {
        this.organizationSubject.complete();
        this.loadingSubject.complete();
    }

    loadOrganization(loopBackFilter: LoopBackFilter) {
        this.loadingSubject.next(true);
        this.organizationService.findEvents(loopBackFilter).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
            )
            .subscribe(events => {
                this.organizationSubject.next(events);
            }
            );
    }

}