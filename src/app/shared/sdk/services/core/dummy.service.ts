import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DummyService{

    constructor(private http: Http) {
         var obj;
         this.getCatalogueJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getCatalogueJSON(): Observable<any> {
         return this.http.get("../assets/dummy-catalogue.json")
                         .map((res:any) => res.json())
                         .catch((error:any) => {console.log(error); return Observable.throw(error.statusText)});

     }
}
