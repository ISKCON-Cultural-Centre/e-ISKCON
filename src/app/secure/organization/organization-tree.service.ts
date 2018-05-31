import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {catchError, finalize} from 'rxjs/operators';


import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';

import { Organization, OrganizationTree, OrganizationTreeApi, OrganizationApi } from '../..//shared/sdk';
import { OrganizationService } from './organization.service';

@Injectable()
export class OrganizationTreeService implements OnInit, OnDestroy {
  
  private treeSubject = new BehaviorSubject<String[]>([]);
  loopBackFilter: LoopBackFilter = {};
  
  constructor(
    private organizationService: OrganizationService,
    private organizationTreeApi: OrganizationTreeApi,
  ) {

   }

  ngOnInit() {
  }

  connect(): Observable<String[]> {
    return this.treeSubject.asObservable();
}


  getOrganizationChildren(organizationId: String) {
    this.loopBackFilter.where = {'lev1': organizationId};
    this.loopBackFilter.order = ['lev1 ASC'];
    this.loopBackFilter.fields = ['lev1', 'lev2', 'lev3', 'lev4'];
    this.organizationTreeApi.findOne(this.loopBackFilter).subscribe(
      orgs => {
        this.treeSubject.next(Object.keys(orgs).map(function(k) {return orgs[k]; }));
        //console.log(orgs);
      }
    )

  }

  ngOnDestroy() {
    this.treeSubject.complete();
  }

}
