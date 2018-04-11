import { Component, OnInit, Inject } from '@angular/core';
import {MatCard, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { Devotee } from '../../shared/sdk/index';
import { DevoteeCardComponent } from './devotee-card.component';

@Component({
  selector: 'app-devotee-detail',
  templateUrl: './devotee-detail.component.html',
  styleUrls: ['./devotee-detail.component.css']
})
export class DevoteeDetailComponent implements OnInit {

selectedDevotee: Devotee;


title: string;

constructor(
    private dialogRef: MatDialogRef<DevoteeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.title = data.spiritualName;
    this.selectedDevotee = data;
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
