import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { LookupData } from '../services/models/lookupData';
import { DummyService } from '../services/dummy.service';
import { LookupTableData } from '../services/models/lookupTableData';

@Injectable()
export class LookupService {

  constructor(private dummyService:DummyService) { } 
  

  getLookupTableData():Observable<LookupTableData[]> {
    return this.dummyService.getLookupTableData();
  }

  getLookupData(tableName:String):Observable<LookupData[]> {
    return this.dummyService.getLookupData(tableName);
  }
}
