import { Component, ViewChild, EventEmitter, OnInit, Input, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {merge} from 'rxjs/observable/merge';
import {fromEvent} from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';

import { MatDialog,  MatDialogConfig, MatChipInputEvent, MatAutocompleteSelectedEvent, 
  MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels'
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { DevoteeApi, Devotee, OrganizationTree, OrganizationTreeApi } from '../..//shared/sdk';
import { AuthService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';
import { DevoteesDataSource } from './devotees-data-source';
import { DevoteesListService } from './devotees-list-service';
import { DevoteeSearchFilterShareService } from './devotee-search-filter-share-service';
import { DevoteeQuickAddComponent} from './devotee-quick-add.component';
import { DevoteeDetailAddComponent} from './devotee-detail-add.component';

@Component({
  selector: 'app-devotee-management',
  templateUrl: './devotee-management.component.html',
  styleUrls: ['./devotee-management.component.css']
})
export class DevoteeManagementComponent implements OnInit, AfterViewInit {

  devoteeId: String;
  devotee: Devotee;

  @Input() combinedFilters = '';
  @Output() selectedDevotee = new EventEmitter<Devotee>();

  loopBackFilter: LoopBackFilter = {};


  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();


  dataSource = new DevoteesDataSource(this.devoteesListService);
  displayedColumns = ['name', 'mobileNo', 'circle', /* 'edit', 'delete' */];
  filteredDevoteesCount = new BehaviorSubject<number>(0);
  public filteredDevoteesCount$ = this.filteredDevoteesCount.asObservable();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private notificationService: NotificationService,
    private devoteesListService: DevoteesListService,
    private devoteeApi: DevoteeApi,
    private organizationTreeApi: OrganizationTreeApi,
    private authService: AuthService,
    private devoteeSearchFilterShareService: DevoteeSearchFilterShareService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.devotee = this.authService.getCurrentUserData();
    this.organizationTreeApi.find(
      { 'where': {'lvl1': this.devotee.organizationId } }
    ).subscribe(
      tree => {
        console.log(tree);
      }
    );
    this.loopBackFilter.include = ['fkDevoteeLanguage1rel', 'fkDevoteeProfessionMaster1rel', 'fkDevoteeCircle1rel'];
    this.loopBackFilter.order = ['spiritualName ASC'];
    this.one$ = this.devoteeSearchFilterShareService.devoteeFilter$.startWith( '{ "and": []}' ).
    subscribe(
      filters => {
        if (filters) {
          this.loopBackFilter.where = JSON.parse(filters.toString());
          this.three$ = this.devoteeApi.count(filters)
          .subscribe(
            count => {
              this.filteredDevoteesCount.next(count.count);
              this.dataSource.loadDevotees(this.loopBackFilter, 0, 10);
              this.paginator.pageIndex = 0;
            }
          );
      }
    }
    );
  }


  ngAfterViewInit() {
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
    this.two$ = this.devoteeApi.count(this.combinedFilters)
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

  editDevotee(devotee: Devotee) {
    this.selectedDevotee.emit(devotee);
}

onRowClicked(row) {
  this.selectedDevotee.emit(row);
}

deleteDevotee(devotee: Devotee) {
  this.devoteeApi.deleteById(devotee.id)
  .subscribe(result => {
    this.loadDevoteesPage();
    this.notificationService.notificationSubject.next('Role ' + '"' + devotee.spiritualName + '" deleted successfully');
    }
  );
}


openQuickAddDevoteeDialog() {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.hasBackdrop = true;

  const dialogRef = this.dialog.open(DevoteeQuickAddComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
    //data => console.log('Dialog output:', data)
  );
}

openDetailedAddDevoteeDialog() {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.hasBackdrop = true;

  const dialogRef = this.dialog.open(DevoteeDetailAddComponent, dialogConfig);

  dialogRef.afterClosed().subscribe(
    //data => console.log('Dialog output:', data)
  );
}

openDialog(devotee: Devotee) {
  let dialogRef = this.dialog.open(DialogBoxComponent, {
    width: '600px',
    data: 'Delete the devotee ' + devotee.spiritualName
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      this.deleteDevotee(devotee);
    } else { }
  });
}

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
  }
}
