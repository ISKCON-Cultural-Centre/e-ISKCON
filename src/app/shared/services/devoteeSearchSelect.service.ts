import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { Devotee  } from '../../shared/sdk/models';

@Injectable()
export class DevoteeSearchSelectService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<Devotee>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  announceMission(devotee: Devotee) {
    this.missionAnnouncedSource.next(devotee);
  }

}
