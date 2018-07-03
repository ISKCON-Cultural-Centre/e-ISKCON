import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';


import { LoopBackFilter } from '../../shared/sdk/models/BaseModels';

import { OrganizationTree, OrganizationTreeApi } from '../../shared/sdk';

@Injectable()
export class OrganizationTreeService implements OnInit, OnDestroy {
  
  private treeSubject = new BehaviorSubject<OrganizationTree[]>([]);
  loopBackFilter: LoopBackFilter = {};
  
  constructor(
    private organizationTreeApi: OrganizationTreeApi,
  ) {

   }

  ngOnInit() {
  }

  connect(): Observable<OrganizationTree[]> {
    return this.treeSubject.asObservable();
}


  getOrganizationTree() {
    //this.loopBackFilter.where = {'parentId': organizationId};
    this.loopBackFilter.order = ['displayOrder ASC'];
    //this.loopBackFilter.fields = ['nodeId'];
    this.organizationTreeApi.find<OrganizationTree>(this.loopBackFilter).subscribe(
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
