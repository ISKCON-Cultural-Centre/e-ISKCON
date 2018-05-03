import { Component, ViewChild, EventEmitter, OnInit, Input, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {merge} from 'rxjs/observable/merge';
import {fromEvent} from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';

import { MatDialog, MatChipInputEvent, MatAutocompleteSelectedEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { DevoteeApi, Devotee, DepartmentAnnouncementApi, DepartmentAnnouncement } from '../..//shared/sdk';
import { AuthService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';
import { AnnouncementDataSource } from './announcement-data-source';
import { AnnouncementListService } from './announcement-list-service';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent  implements OnInit, AfterViewInit, OnDestroy {

  devoteeId: String;
  devotee: Devotee;

  @Input() combinedFilters = '';
  @Output() selectedDevotee = new EventEmitter<Devotee>();
  loopBackFilter: LoopBackFilter = {};


  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();


  dataSource = new AnnouncementDataSource(this.announcementListService);
  displayedColumns = ['department', 'subject', 'message', 'validity'];
  filteredAnnouncementsCount = new BehaviorSubject<number>(0);
  public filteredAnnouncementsCount$ = this.filteredAnnouncementsCount.asObservable();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private announcementListService: AnnouncementListService,
    private departmentAnnouncementApi: DepartmentAnnouncementApi
  ) {
  }

  ngOnInit() {
    //this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.loopBackFilter.include = ['fkDepartmentAnnouncementDepartment1rel'];
    this.loopBackFilter.order = ['validUntil DESC'];
              this.dataSource.loadAnnouncements(this.loopBackFilter, 0, 10);
              this.paginator.pageIndex = 0;
  }


  ngAfterViewInit() {
      // reset the paginator after sorting
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
          .pipe(
              tap(() => {
                this.loadAnnouncementsPage();
              }
            )
          )
          .subscribe();
  }


  loadAnnouncementsPage() {
    this.two$ = this.departmentAnnouncementApi.count(this.combinedFilters)
    .subscribe(
      count => {
        this.filteredAnnouncementsCount.next(count.count);
        this.dataSource.loadAnnouncements(
          this.loopBackFilter,
          this.paginator.pageIndex,
          this.paginator.pageSize);
      }
    );
  }

  onRowClicked(row) {
    this.selectedDevotee.emit(row);
}

doneAnnouncing(announcement: DepartmentAnnouncement) {

}

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
  }
}
