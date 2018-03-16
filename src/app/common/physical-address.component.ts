import { Component, Input, Output, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MaterialModule } from '../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import {MatDialog} from '@angular/material';

import { DialogBoxComponent } from '../shared/components/dialog-box/dialog-box.component';
import {
  PhysicalAddress, PhysicalAddressApi, 
  } from '../../../src/app/shared/sdk';


@Component({
  selector: 'app-physical-address',
  templateUrl: './physical-address.component.html',
  styleUrls: ['./physical-address.component.css']
})
export class PhysicalAddressComponent implements OnInit, OnChanges {

  private _physicalAddress = new BehaviorSubject<PhysicalAddress>(new PhysicalAddress);

  @Input()
  set physicalAddress(value) {
      // set the latest value for _data BehaviorSubject
      this._physicalAddress.next(value);
  };
  get physicalAddress() {
    // get the latest value from _data BehaviorSubject
    return this._physicalAddress.getValue();
  }

  @Output() newAddress:  EventEmitter<any> = new EventEmitter();

  addressForm: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private physicalAddressApi: PhysicalAddressApi,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.createForm();
   }


  ngOnInit() {
  };


  ngOnChanges(changes: SimpleChanges) {
    if (changes['physicalAddress']) {
      this._physicalAddress
      .subscribe(x => {
        this.addressForm.reset();
        this.loadForm();
        }
      )
    }
  }

  createForm() {
    this.addressForm = this.fb.group({
      id: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      addressArea: ['', Validators.required],
      addressCity: ['', Validators.required],
      addressCountry: ['', Validators.required],
      addressPin: ['', Validators.required],
      addressState: ['', Validators.required]
    });
  }

  loadForm() {
    if (this.physicalAddress) {
    this.addressForm.setValue(
      {
        id: this.physicalAddress.id,
        addressLine1: this.physicalAddress.addressLine1,
        addressLine2: this.physicalAddress.addressLine2,
        addressArea: this.physicalAddress.addressArea,
        addressCity: this.physicalAddress.addressCity,
        addressCountry: this.physicalAddress.addressCountry,
        addressPin: this.physicalAddress.addressPin,
        addressState: this.physicalAddress.addressState
      }
    );
  }
  }

  onSubmit() {
    if (!this.physicalAddress){
      this.physicalAddressApi.create<PhysicalAddress>(this.addressForm.value)
      .subscribe(
        physicalAddress => {
          console.log(physicalAddress);
          this.newAddress.emit(physicalAddress.id);
          this.notificationService.notificationSubject.next('Address created successfully');
        }
      )
    } else {
      this.physicalAddressApi.patchAttributes(this.physicalAddress.id, this.addressForm.value)
      .subscribe(
        physicalAddress => {
          this.notificationService.notificationSubject.next('Address updated successfully');
        }
      )
    }
  }

  deleteAddress() {
    this.physicalAddressApi.deleteById(this.physicalAddress.id)
    .subscribe(result => {
      this.notificationService.notificationSubject.next(' ' + '"' +  this.physicalAddress.addressLine1 + ', ' 
      + this.physicalAddress.addressLine2 + ', ' + this.physicalAddress.addressArea + ', ' + this.physicalAddress.addressCity 
      + ', ' + this.physicalAddress.addressCountry +
      ', ' + this.physicalAddress.addressPin + '" deleted successfully');
      }
    );
  }

}
