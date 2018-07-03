import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../shared/sdk';
import {  NotificationService} from '../../shared/services';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import { Observable, BehaviorSubject } from 'rxjs';

import { MatDialog } from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { DevoteeKarmiFamily, DevoteeKarmiFamilyApi } from '../../shared/sdk';


  @Component({
    selector: 'app-devotee-karmi-family',
    templateUrl: './devotee-karmi-family.component.html',
    styleUrls: ['./devotee-karmi-family.component.css']
  })
  export class DevoteeKarmiFamilyComponent implements OnInit, OnChanges {

  private _devoteeKarmiFamily = new BehaviorSubject<DevoteeKarmiFamily>(new DevoteeKarmiFamily);

  @Input()
  set familyMember(value) {
      // set the latest value for _data BehaviorSubject
      this._devoteeKarmiFamily.next(value);
  }
  get familyMember() {
    // get the latest value from _data BehaviorSubject
    return this._devoteeKarmiFamily.getValue();
  }

  @Output() newMember:  EventEmitter<any> = new EventEmitter();

  familyForm: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private devoteeKarmiFamilyApi: DevoteeKarmiFamilyApi,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.createForm();
   }


  ngOnInit() {
  };


  ngOnChanges(changes: SimpleChanges) {
    if (changes['familyMember']) {
      this._devoteeKarmiFamily
      .subscribe(x => {
        this.familyForm.reset();
        this.loadForm(x);
        }
      )
    }
  }

  createForm() {
    this.familyForm = this.fb.group({
      devoteeId: [null, Validators.required],
      relatedDevoteeId: [null, Validators.required],
      relationshipId: [null, Validators.required],
      familyName: [null]
    });
  }

  loadForm(devoteeKarmiFamily: DevoteeKarmiFamily) {
    if (devoteeKarmiFamily) {
    this.familyForm.setValue(
      {
        devoteeId: devoteeKarmiFamily.devoteeId,
        relatedDevoteeId: devoteeKarmiFamily.relatedDevoteeId,
        relationshipId: devoteeKarmiFamily.relationshipId,
        familyName: devoteeKarmiFamily.familyName
      }
    );
  }
  }

  onSubmit() {
    if (!this._devoteeKarmiFamily){
      this.devoteeKarmiFamilyApi.create<DevoteeKarmiFamily>(this.familyForm.value)
      .subscribe(
        familyMember => {
          console.log(familyMember);
          this.newMember.emit(familyMember.devoteeId);
          this.notificationService.notificationSubject.next('Family Member created successfully');
        }
      )
    } else {
      this.devoteeKarmiFamilyApi.patchAttributes(this._devoteeKarmiFamily, this.familyForm.value)
      .subscribe(
        physicalAddress => {
          this.notificationService.notificationSubject.next('Address updated successfully');
        }
      )
    }
  }

  deleteAddress() {
    this.devoteeKarmiFamilyApi.deleteById(this._devoteeKarmiFamily)
    .subscribe(result => {
      this.notificationService.notificationSubject.next('deleted successfully');
      }
    );
  }

}
