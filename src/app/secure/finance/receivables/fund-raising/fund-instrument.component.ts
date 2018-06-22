import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {LoopBackFilter} from '../../../../shared/sdk/models/BaseModels';
import { Devotee, DevoteeApi, FundInstrumentType, FundInstrumentTypeApi, FundInstrument, FundInstrumentApi } from '../../../../shared/sdk';
import { NotificationService } from '../../../../shared/services';
import { MaterialModule } from '../../../../material.module';
import { SharedComponentsModule } from '../../../../shared/components/shared-components.module';
import { InlineEditComponent } from '../../../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-fund-instrument',
  templateUrl: './fund-instrument.component.html',
  styleUrls: ['./fund-instrument.component.css']
})
export class FundInstrumentComponent implements OnInit, OnDestroy {

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();

  loopBackFilter: LoopBackFilter = {};

  displayedColumns = ['instrument', 'ref', 'start', 'end', 'delete'];
  add = false; 
  fundInstruments: FundInstrument[] = [];
  devotees: Devotee[] = [];
  dataSource = new MatTableDataSource<FundInstrumentType>();

  fundInstrumentForm: FormGroup;
  fundInstrumentTypes: FundInstrumentType[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private fundInstrumentApi: FundInstrumentApi,
    private fundInstrumentTypeApi: FundInstrumentTypeApi,
    private devoteeApi: DevoteeApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadFundInstruments();
    //this.loadFundInstrumentTypes();
  }

  createForm() {
    this.fundInstrumentForm = this.fb.group({
      instrumentRefNo: [null, Validators.required],
      receiptInstrumentTypeId: [null, Validators.required],
      startNo: [null, Validators.required],
      endNo: [null, Validators.required],
      currentStartNo: 0,
      currentEndNo: 0,
      statusId: [0]
    });
  }

  editInstrumentTypeField($event: MatSelectChange, fundInstrument: FundInstrument ) {
    this.fundInstrumentApi.patchAttributes(fundInstrument.id, {fundInstrumentType: $event.value})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editInstrumentRefNoField(editValue: string, el: any) {
    this.fundInstrumentApi.patchAttributes(el.id, {instrumentRefNo: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }


  editInstrumentStartNoField(editValue: string, el: any) {
    this.fundInstrumentApi.patchAttributes(el.id, {startNo: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  editInstrumentEndNoField(editValue: string, el: any) {
    this.fundInstrumentApi.patchAttributes(el.id, {endNo: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.departmentName + '" updated successfully'));
  }

  displayCreateFundInstrument() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addFundInstrument() {
/*     this.fundInstrumentForm.setValue(
      {
        currentStartNo: this.fundInstrumentForm.get('startNo').value,
        currentEndNo: this.fundInstrumentForm.get('endNo').value,
      }
    ); */
    this.one$ = this.fundInstrumentApi.create<FundInstrument>(this.fundInstrumentForm.value)
    .subscribe(result => {
      this.loadFundInstruments();
      this.notificationService.notificationSubject.next('"' + result.instrumentRefNo + '" created successfully');
      this.add = false;
      this.fundInstrumentForm.reset();
      }
    );
  }


  deleteFundInstrument(fundInstrument: FundInstrument) {
    this.fundInstrumentApi.deleteById(fundInstrument.id)
    .subscribe(result => {
      this.loadFundInstruments();
      this.notificationService.notificationSubject.next('Role ' + '"' + fundInstrument.instrumentRefNo + '" deleted successfully');
      }
    );
  }


  loadFundInstruments() {
    //this.loopBackFilter.where = {'departmentLeaderDevoteeId': this.authService.getCurrentUserId()};
    this.loopBackFilter.include = ['fundInstruments'];
    this.loopBackFilter.order = ['instrumentName ASC'];
    this.two$ = this.fundInstrumentTypeApi.find<FundInstrumentType>(this.loopBackFilter)
    .subscribe(
      fundInstruments => {
        this.fundInstrumentTypes = fundInstruments;
        this.dataSource.data = fundInstruments;
        //console.log(fundInstruments);
      }
    )
  }

/*   loadFundInstrumentTypes() {
    this.three$ = this.fundInstrumentTypeApi.find<FundInstrumentType>({'order': 'instrumentName ASC'})
    .subscribe(
      fundInstrumentTypes => {
        this.fundInstrumentTypes = fundInstrumentTypes;
      }
    )
  } */

  openDialog(fundInstrument: FundInstrument) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the department ' + fundInstrument.instrumentRefNo
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteFundInstrument(fundInstrument);
      } else { }
    });
  }

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
   }


}

