import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-lookup-entry',
  templateUrl: './lookup-entry.component.html',
  styleUrls: ['./lookup-entry.component.css']
})
export class LookupEntryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LookupEntryComponent,null>,
@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
