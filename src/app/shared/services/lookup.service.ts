import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RelationshipMasterApi } from '../sdk';
import { RelationshipMaster } from '../sdk/models/RelationshipMaster';
import { EventMasterApi } from '../sdk';
import { EventMaster } from '../sdk/models/EventMaster';
import { FestivalMasterApi } from '../sdk';
import { FestivalMaster } from '../sdk/models/FestivalMaster';

@Injectable()
export class LookupService {

  constructor(private relationshipMasterApi: RelationshipMasterApi, 
  	private eventMasterApi: EventMasterApi,
  	private festivalMasterApi: FestivalMasterApi) { }

  getRelationships(): Observable<RelationshipMaster[]> {
    return this.relationshipMasterApi.find();
      }

  getEvents(): Observable<RelationshipMaster[]> {
    return this.eventMasterApi.find();
      }

  getFestivals(): Observable<FestivalMaster[]> {
    return this.festivalMasterApi.find();
      }
}
