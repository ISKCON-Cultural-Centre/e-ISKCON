import { Component, Input, Inject, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import {MatCard, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

import { DevoteeApi, Devotee, Organization, OrganizationApi, OrganizationLevelMaster, OrganizationTree } from '../..//shared/sdk';
import { NotificationService, FormErrorService } from '../../shared/services';
import { OrganizationDataSource } from '../organization/organization-data-source';
import { OrganizationTreeService } from '../organization/organization-tree.service';


@Component({
  selector: 'app-devotee-quick-add',
  templateUrl: './devotee-quick-add.component.html',
  styleUrls: ['./devotee-quick-add.component.css']
})
export class DevoteeQuickAddComponent implements OnInit, OnDestroy {

  @Input() circle: String = null;
  @Input() organizationId: String;

  one$ = new Subscription();
  two$ = new Subscription();
  organizationTree: OrganizationTree[];

  submitted = false;
  devoteeForm: FormGroup;

  public formErrors = {
    legalName: '',
    email: '',
    gender: '',
    mobileNo: '',
  }

  constructor(
    private notificationService: NotificationService,
    public formErrorService: FormErrorService,
    private dialogRef: MatDialogRef<DevoteeQuickAddComponent>,
    private devoteeApi: DevoteeApi,
    private organizationApi: OrganizationApi,
    private organizationTreeService: OrganizationTreeService,
    @Inject(MAT_DIALOG_DATA) data,
    private fb: FormBuilder) {
    this.createForm();
    this.organizationId = data;
  }


  ngOnInit() {
    this.createForm();
    this.organizationApi.find<Organization>(
      { 'where': {'level': { 'like': 'pattern'} } }
    );
    this.organizationTreeService.getOrganizationTree();
    this.two$ = this.organizationTreeService.connect().subscribe(
      orgTree => {
        this.organizationTree = orgTree;
      }
    )    
  }


  save() {
    if (this.devoteeForm.valid) {
      this.addDevotee();
    } else {
      this.formErrors = this.formErrorService.validateForm(this.devoteeForm, this.formErrors, false)
    }
  }

  close() {
      this.dialogRef.close();
  }

  createForm() {
    this.devoteeForm = this.fb.group({
      id: '',
      legalName: ['', Validators.required],
      spiritualName: '',
      gender: ['', Validators.required],
      email: ['', Validators.email],
      incomeTaxId: '',
      mobileNo: ['', Validators.required],
      landlineNo: '',
      organizationId: this.organizationId,
    });
    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.devoteeForm.valueChanges.subscribe((data) => {
      this.formErrors = this.formErrorService.validateForm(this.devoteeForm, this.formErrors, true)
    });
    if (this.organizationId) {
      this.devoteeForm.get('organizationId').setValue(this.organizationId);
      this.devoteeForm.get('organizationId').disable();
    }
  }


  addDevotee() {
    //console.log(this.devoteeForm);
    if (!this.devoteeForm.get('spiritualName').value) {
      this.devoteeForm.setValue(
        {
          spiritualName: this.devoteeForm.get('legalName').value,
        }
      );
    }
    this.one$ = this.devoteeApi.create<Devotee>(this.devoteeForm.value)
    .subscribe(
      devotee => {
        this.dialogRef.close();
        this.notificationService.notificationSubject.next('New Devotee [' + devotee.legalName + '] created successfully');
      }
    );
  }


  isFieldInvalid(field: string) {
    return (
      (!this.devoteeForm.get(field).valid && this.devoteeForm.get(field).touched) ||
      (this.devoteeForm.get(field).untouched)
    );
  }

 
   reset() {
      this.devoteeForm.reset();
   }
 

   ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
   }

}
