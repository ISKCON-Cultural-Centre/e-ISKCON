import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  ServiceRole, ServiceRoleApi, Department, DepartmentApi } from '../../../src/app/shared/sdk';
import {  NotificationService} from '../shared/services';
import { MaterialModule } from '../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatSelectChange } from '@angular/material';

import {MatDialog} from '@angular/material';

import { DialogBoxComponent } from '../shared/components/dialog-box/dialog-box.component';
import {
  PhysicalAddress, PhysicalAddressApi, PhysicalAddressTypeMaster, PhysicalAddressTypeMasterApi
  } from '../../../src/app/shared/sdk';


@Component({
  selector: 'app-physical-address',
  templateUrl: './physical-address.component.html',
  styleUrls: ['./physical-address.component.css']
})
export class PhysicalAddressComponent implements OnInit, OnChanges {

  @Input() addressId: string;
  add = false;
  physicalAddresses: PhysicalAddress[] = [];
  addressTypes: PhysicalAddressTypeMaster[] = [];

  dialogResult = '';

  addressForm: FormGroup;

  constructor(
    private notificationService: NotificationService,
    private physicalAddressApi: PhysicalAddressApi,
    private physicalAddressTypeMasterApi: PhysicalAddressTypeMasterApi,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.createForm();
   }


  ngOnInit() {
    this.loadAddresseTypeMaster();
    this.loadAddresses();
  }


  ngOnChanges() {
    this.addressForm.reset();
    this.setAddresses(this.physicalAddresses);
  }

  loadAddresseTypeMaster(){
    this.physicalAddressTypeMasterApi.find<PhysicalAddressTypeMaster>()
      .subscribe(
        addressTypes => {
          this.addressTypes = addressTypes;
        }
      );
  }

  loadAddresses(){
    this.physicalAddressApi.find<PhysicalAddress>()
      .subscribe(
        addresses => {
          this.physicalAddresses = addresses;
          this.setAddresses(addresses);
        }
      );
  }


  addAddress() {
    this.addressList.push(this.fb.group(new PhysicalAddress()));
    console.log(this.addressForm.controls);
  }

  onSubmit() {

  }

  createForm() {
    this.addressForm = this.fb.group({
      addressList: this.fb.array([
        this.fb.group({
          id: ['', Validators.required],
          addressTypeMasterId: ['', Validators.required],
          addressLine1: ['', Validators.required],
          addressLine2: ['', Validators.required],
          addressArea: ['', Validators.required],
          addressCity: ['', Validators.required],
          addressCountry: ['', Validators.required],
          addressPin: ['', Validators.required]
        })
      ])

    });
  }

  setAddresses(addresses: PhysicalAddress[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.addressForm.setControl('addressList', addressFormArray);
  }

  get addressList(): FormArray {
    return this.addressForm.get('addressList') as FormArray;
  };


  displayCreateRole() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }


  deleteAddress(physicalAddress: PhysicalAddress) {
    this.physicalAddressApi.deleteById(physicalAddress.id)
    .subscribe(result => {
      this.notificationService.notificationSubject.next(' ' + '"' +  physicalAddress.addressLine1 + ', ' 
      + physicalAddress.addressLine2 + ', ' + physicalAddress.addressArea + ', ' + physicalAddress.addressCity 
      + ', ' + physicalAddress.addressCountry +
      ', ' + physicalAddress.addressPin + '" deleted successfully');
      }
    );
  }

  openDialog(physicalAddress: PhysicalAddress) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the address ' + physicalAddress.addressLine1 + ', ' + physicalAddress.addressLine2 + ', ' 
      + physicalAddress.addressArea + ', ' + physicalAddress.addressCity + ', ' + physicalAddress.addressCountry + 
      ', ' + physicalAddress.addressPin
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteAddress(physicalAddress);
      } else { }
    });
  } 

}
