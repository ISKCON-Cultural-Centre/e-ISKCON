import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatCard, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Devotee } from '../../shared/sdk/index';

@Component({
  selector: 'app-devotee-card',
  templateUrl: './devotee-card.component.html',
  styleUrls: ['./devotee-card.component.css']
})
export class DevoteeCardComponent implements OnInit {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<DevoteeCardComponent>,
    @Inject(MAT_DIALOG_DATA) devotee,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      id: devotee.id,
      legalName: devotee.legalName,
      spiritualName: devotee.spiritualName ? devotee.spiritualName : devotee.legalName,
      circleId: devotee.circleId,
      gender: devotee.gender,
      email: devotee.email,
      gothra: devotee.gothra ? devotee.gothra : null,
      creditLimit: devotee.creditLimit,
      nakshatra: devotee.nakshatra ? devotee.nakshatra : null,
      governmentUniqueId: devotee.governmentUniqueId,
      incomeTaxId: devotee.incomeTaxId,
      kcAssociationDate: devotee.kcAssociationDate,
      motherTongueLanguageId: devotee.motherTongueLanguageId,
      lpmId: devotee.lpmId,
      dateOfBirth: devotee.dateOfBirth,
      asramaMasterId: devotee.asramaMasterId,
      professionId: devotee.professionId,
      physicalAddressId: devotee.physicalAddressId,
      mobileNo: devotee.mobileNo,
      landlineNo: devotee.landlineNo
    }); 

   }

  ngOnInit() {
  }

}
