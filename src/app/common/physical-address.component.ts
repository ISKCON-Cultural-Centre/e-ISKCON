import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MaterialModule } from '../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

  private _data = new BehaviorSubject<PhysicalAddress>(this.physicalAddress);

  @Input()
  set physicalAddress(value) {
      // set the latest value for _data BehaviorSubject
      this._data.next(value);
  };
  get data() {
    // get the latest value from _data BehaviorSubject
    return this._data.getValue();
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
    this._data
    .takeWhile(() => !this.physicalAddress)
    .subscribe(x => this.loadForm())
  };


  ngOnChanges() {
    
  }
/* 
  loadAddress(){
    console.log(this.addressId);
    this.physicalAddressApi.findById<PhysicalAddress>({id: this.addressId })
      .subscribe(
        address => {
          this.physicalAddress = address;
          this.loadForm();
        }
      );
  }  
 */
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
    console.log(this.data);
    this.addressForm.setValue(
      {
        id: this.data.id,
        addressLine1: this.data.addressLine1,
        addressLine2: this.data.addressLine2,
        addressArea: this.data.addressArea,
        addressCity: this.data.addressCity,
        addressCountry: this.data.addressCountry,
        addressPin: this.data.addressPin,
        addressState: this.data.addressState
      }
    );    
  }

  onSubmit() {
    this.physicalAddressApi.create<PhysicalAddress>(this.addressForm.value)
    .subscribe(
      physicalAddress => {
        console.log(physicalAddress.id);
        this.newAddress.emit(physicalAddress.id);
        this.notificationService.notificationSubject.next(' ' + '"' +  physicalAddress.addressLine1 + ', ' 
        + physicalAddress.addressLine2 + ', ' + physicalAddress.addressArea + ', ' + physicalAddress.addressCity 
        + ', ' + physicalAddress.addressCountry +
        ', ' + physicalAddress.addressPin + '" created successfully');        
      }
    )
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
