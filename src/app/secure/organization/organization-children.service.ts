import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';


import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';

import { OrganizationChildren, OrganizationChildrenApi } from '../../shared/sdk';

@Injectable()
export class OrganizationChildrenService implements OnInit, OnDestroy {
  
  private treeSubject = new BehaviorSubject<OrganizationChildren[]>([]);
  loopBackFilter: LoopBackFilter = {};
  
  constructor(
    private organizationChildrenApi: OrganizationChildrenApi,
  ) {

   }

  ngOnInit() {
  }

  connect(): Observable<OrganizationChildren[]> {
    return this.treeSubject.asObservable();
}


  getOrganizationChildren(organizationId: String) {
    this.loopBackFilter.where = {'parentId': organizationId};
    //this.loopBackFilter.order = ['lev1 ASC'];
    this.loopBackFilter.fields = ['nodeId'];
    this.organizationChildrenApi.find<OrganizationChildren>(this.loopBackFilter).subscribe(
      orgs => {
        this.treeSubject.next(orgs);
        //console.log(orgs);
      }
    )

  }

  ngOnDestroy() {
    this.treeSubject.complete();
  }

}
