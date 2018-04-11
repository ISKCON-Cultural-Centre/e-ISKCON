import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Devotee } from '../../shared/sdk/index';

@Component({
  selector: 'app-devotee-card',
  templateUrl: './devotee-card.component.html',
  styleUrls: ['./devotee-card.component.css']
})
export class DevoteeCardComponent implements OnInit {

  form: FormGroup;  
  @Input() devotee: Devotee;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: this.devotee.id,
      legalName: this.devotee.legalName,
      spiritualName: this.devotee.spiritualName ? this.devotee.spiritualName : this.devotee.legalName,
      circleId: this.devotee.circleId,
      gender: this.devotee.gender,
      email: this.devotee.email,
      gothra: this.devotee.gothra ? this.devotee.gothra : null,
      creditLimit: this.devotee.creditLimit,
      nakshatra: this.devotee.nakshatra ? this.devotee.nakshatra : null,
      governmentUniqueId: this.devotee.governmentUniqueId,
      incomeTaxId: this.devotee.incomeTaxId,
      kcAssociationDate: this.devotee.kcAssociationDate,
      motherTongueLanguageId: this.devotee.motherTongueLanguageId,
      lpmId: this.devotee.lpmId,
      dateOfBirth: this.devotee.dateOfBirth,
      asramaMasterId: this.devotee.asramaMasterId,
      professionId: this.devotee.professionId,
      physicalAddressId: this.devotee.physicalAddressId,
      mobileNo: this.devotee.mobileNo,
      landlineNo: this.devotee.landlineNo
    }); 
  }

}
