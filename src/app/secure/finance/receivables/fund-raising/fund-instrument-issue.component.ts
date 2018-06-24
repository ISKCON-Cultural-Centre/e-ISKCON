import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {LoopBackFilter} from '../../../../shared/sdk/models/BaseModels';
import { Devotee, DevoteeApi, FundInstrumentType, FundInstrumentTypeApi, 
  InstrumentIssueRegister, InstrumentIssueRegisterApi } from '../../../../shared/sdk';
import { NotificationService } from '../../../../shared/services';
import { MaterialModule } from '../../../../material.module';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-fund-instrument-issue',
  templateUrl: './fund-instrument-issue.component.html',
  styleUrls: ['./fund-instrument-issue.component.css']
})
export class FundInstrumentIssueComponent implements OnInit, OnDestroy {

  @Input() fundInstrumentId: string;
  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();

  add = false; 

  devotees: Devotee[] = [];


  instrumentIssueRegisterForm: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private instrumentIssueRegisterApi: InstrumentIssueRegisterApi,
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
    this.instrumentIssueRegisterForm = this.fb.group({
      fundInstrumentId: [this.fundInstrumentId, Validators.required],
      owningDevoteeId: [null, Validators.required],
      receiptNo: [null, Validators.required],
      issueDate: [null, Validators.required],
      issuerId: [null, Validators.required],
    });
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