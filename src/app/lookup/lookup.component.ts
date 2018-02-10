import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { LookupService } from '../shared/services/lookup.service';
import { AuthService } from '../shared/services/auth.service';
import { NotificationService } from '../shared/services/notification.service';
import { RelationshipMaster } from '../shared/sdk/models/RelationshipMaster';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.css']
})
export class LookupComponent implements OnInit {

  relationships: RelationshipMaster[];
  isLoggedIn: Boolean;
  isLoggedIn$: Observable <Boolean>;
  devoteeName$: Observable <String>;
  username: String = '';
  selectedLookupTable = {name:'Relationships'};
  lookupTables = [{name:'Relationships'},{name:'Festivals'},{name:'Events'}];
  displayedColumns = ['select', 'id', 'relationName'];
  selection = new SelectionModel(false, []);
  //dataSource = new MatTableDataSource<Element>(this.relationships);
  dataSource = new MatTableDataSource();  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService,
    private notificationService: NotificationService,
    private lookupService: LookupService) {
      if (this.authService.loggedIn) {
        this.authService.devoteeName.next(this.authService.getCurrentUserData());
      }
      
     }

 getLookupTableData():void{
   if (this.selectedLookupTable.name == "Relationships"){
       this.getRelationships();
   }
   else if (this.selectedLookupTable.name == "Events"){
       this.getEvents();
   }
   else if (this.selectedLookupTable.name == "Festivals"){
       this.getFestivals();
   }
 }

 getRelationships(): void {
    this.lookupService.getRelationships()
      .subscribe(relationships => {(this.dataSource = new MatTableDataSource(relationships)),(this.displayedColumns = ['select', 'id', 'relationName']), (this.dataSource.paginator = this.paginator),(this.dataSource.sort = this.sort) 
      });
  }

  getEvents(): void {
    this.lookupService.getEvents()
      .subscribe(events => {(this.dataSource = new MatTableDataSource(events)),(this.displayedColumns = ['select', 'id', 'eventName']),(this.dataSource.paginator = this.paginator),(this.dataSource.sort = this.sort) 
      });
  }

  getFestivals(): void {
    this.lookupService.getFestivals()
      .subscribe(festivals => {(this.dataSource = new MatTableDataSource(festivals)),(this.displayedColumns = ['select', 'id', 'festivalName']),(this.dataSource.paginator = this.paginator),(this.dataSource.sort = this.sort) 
      });
  }  

 ngOnInit() {
	this.devoteeName$ = this.authService.getDevoteeName;
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.isLoggedIn
    .subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        if (isLoggedIn) {
          this.username = this.authService.getCurrentUserData();
          this.getRelationships();
          //this.dataSource = new MatTableDataSource(this.relationships);
      } else {}
    });

}

 ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}