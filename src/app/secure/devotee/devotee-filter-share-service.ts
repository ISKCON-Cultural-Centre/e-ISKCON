import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DevoteeFilterShareService {

  // Observable string sources
  private devoteeFilter = new Subject<String>();

  devoteeFilter$ = this.devoteeFilter.asObservable();

  // Service message commands
  filterChanged(filter: String) {
    this.devoteeFilter.next(filter);
  }

}
