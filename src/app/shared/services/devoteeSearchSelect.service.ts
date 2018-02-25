import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Injectable()
export class DevoteeSearchSelectService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<MatAutocompleteSelectedEvent>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // Service message commands
  announceMission(mission: MatAutocompleteSelectedEvent) {
    this.missionAnnouncedSource.next(mission);
  }

}
