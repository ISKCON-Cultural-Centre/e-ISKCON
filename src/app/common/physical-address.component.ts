import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MaterialModule } from '../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';

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
export class PhysicalAddressComponent implements OnInit {

  @Input() addressId: String;
  @Output() newAddress:  EventEmitter<any> = new EventEmitter();
  
  physicalAddress: PhysicalAddress;
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
    this.addressId ? this.loadAddress() : undefined;
  }


  loadAddress(){
    this.physicalAddressApi.findById<PhysicalAddress>({id: this.addressId })
      .subscribe(
        address => {
          this.physicalAddress = address;
          this.loadForm();
        }
      );
  }  

  createForm() {
    this.addressForm = this.fb.group({
      id: ['', Validators.required],
      addressTypeMasterId: ['', Validators.required],
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
    this.addressForm.setValue(
      {
        id: this.physicalAddress.id,
        addressTypeMasterId: this.physicalAddress,
        addressLine1: this.physicalAddress,
        addressLine2: this.physicalAddress,
        addressArea: this.physicalAddress,
        addressCity: this.physicalAddress,
        addressCountry: this.physicalAddress,
        addressPin: this.physicalAddress,
        addressState: this.physicalAddress
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
