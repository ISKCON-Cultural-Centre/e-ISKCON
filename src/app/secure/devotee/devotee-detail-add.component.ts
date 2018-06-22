import { Component, OnInit, Inject } from '@angular/core';
import {MatCard, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { Devotee } from '../../shared/sdk/index';
import { DevoteeCardComponent } from './devotee-card.component';

@Component({
  selector: 'app-devotee-detail-add',
  templateUrl: './devotee-detail-add.component.html',
  styleUrls: ['./devotee-detail-add.component.css']
})
export class DevoteeDetailAddComponent implements OnInit {

selectedDevotee: Devotee;


title: string;
organizationId: string;

constructor(
    private dialogRef: MatDialogRef<DevoteeDetailAddComponent>,
    @Inject(MAT_DIALOG_DATA) data
) {
    this.title = 'Add New Devotee - Detailed';
    this.organizationId = data;
}

ngOnInit() {
}

save() {
    this.dialogRef.close();
}

close() {
    this.dialogRef.close(this.selectedDevotee);
}

}
