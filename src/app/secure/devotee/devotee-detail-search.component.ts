import { Component, ViewChild, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, Subscription, BehaviorSubject, merge, fromEvent } from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { MatDialog,  MatDialogConfig, MatChipInputEvent, MatAutocompleteSelectedEvent, 
  MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {  difference, union } from 'set-manipulator';


import {LoopBackFilter} from '../../shared/sdk/models/BaseModels'
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { DevoteeSearchFilterShareService } from './devotee-search-filter-share-service';
import { Devotee } from '../../shared/sdk/index';
import { DevoteeDetailComponent} from './devotee-detail.component';
import { DevoteeProfileComponent } from './devotee-profile.component'
import { DevoteeQuickAddComponent} from './devotee-quick-add.component';
import { DevoteeDetailAddComponent} from './devotee-detail-add.component';

@Component({
  selector: 'app-devotee-filter',
  templateUrl: './devotee-detail-search.component.html',
  styleUrls: ['./devotee-detail-search.component.css'],
})
export class DevoteeDetailSearchComponent implements OnInit {


  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  openDevoteeDialog(devotee: Devotee) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = devotee;

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.dialog.open(DevoteeDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      //data => console.log('Dialog output:', data)
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

}

