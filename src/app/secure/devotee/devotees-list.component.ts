import { Component, ViewChild, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {merge} from 'rxjs/observable/merge';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


import {LoopBackFilter} from '../../shared/sdk/models/BaseModels'
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress, SpiritualLevelMaster, SpiritualLevelMasterApi,
  } from '../..//shared/sdk';
import { AuthService, NotificationService } from '../../shared/services';
import { DevoteeFilterShareService } from './devotee-filter-share-service';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';
import { DevoteesDataSource } from './devotees-data-source';
import { DevoteesListService } from './devotees-list-service';


@Component({
  selector: 'app-devotees-list',
  templateUrl: './devotees-list.component.html',
  styleUrls: ['./devotees-list.component.css']
})
export class DevoteesListComponent  implements OnInit, OnDestroy {

  devoteeId: String;
  devotee: Devotee;

  combinedFilters = '';
  loopBackFilter: LoopBackFilter = {};


  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();
  six$ = new Subscription();
  seven$ = new Subscription();
  eight$ = new Subscription();
  nine$ = new Subscription();
  ten$ = new Subscription();
  eleven$ = new Subscription();


  filterCondition = new Subject<any>();

  dataSource = new DevoteesDataSource(this.devoteesListService);
  displayedColumns = ['legalName', 'spiritualName', 'circle'];
  filteredDevoteesCount = new BehaviorSubject<number>(0);
  public filteredDevoteesCount$ = this.filteredDevoteesCount.asObservable();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private circleApi: CircleApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private professionMasterApi: ProfessionMasterApi,
    private spiritualLevelMasterApi: SpiritualLevelMasterApi,
    private authService: AuthService,
    private devoteeApi: DevoteeApi,
    private devoteesListService: DevoteesListService,
    private devoteeFilterShareService: DevoteeFilterShareService) {
  }

  ngOnInit() {
    

    this.loopBackFilter.include = ['fkDevoteeLanguage1rel', 'fkDevoteeProfessionMaster1rel', 'fkDevoteeCircle1rel'];
    this.loopBackFilter.order = ['legalName ASC', 'spiritualName ASC'];
    this.one$ = this.devoteeApi.count(this.combinedFilters)
    .subscribe(
      count => {
        this.filteredDevoteesCount.next(count.count);
        this.dataSource.loadDevotees(this.loopBackFilter, 0, 10);
        this.paginator.pageIndex = 0;   
      }
    );
    this.two$ = this.filterCondition
    .subscribe(
      filter => {
        this.nine$ = this.devoteeApi.count(this.combinedFilters)
        .subscribe(
          count => {
            this.filteredDevoteesCount.next(count.count);
            this.dataSource.loadDevotees(this.loopBackFilter, this.paginator.pageIndex, this.paginator.pageSize);       
          }
        );    
        this.paginator.pageIndex = 0;    
      }
    ); 
 
      // reset the paginator after sorting
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
          .pipe(
              tap(() => {
                this.loadDevoteesPage();
              }
            )
          )
          .subscribe();
  }


  loadDevoteesPage() {
    this.eight$ = this.devoteeApi.count(this.combinedFilters)
    .subscribe(
      count => {
        this.filteredDevoteesCount.next(count.count);
        this.dataSource.loadDevotees(
          this.loopBackFilter,
          this.paginator.pageIndex,
          this.paginator.pageSize);
      }
    );     
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

  extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

  ngOnDestroy(){
  this.one$.unsubscribe();
  this.two$.unsubscribe();
  }

}
  