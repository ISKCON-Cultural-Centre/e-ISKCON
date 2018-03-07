import { Component, OnInit, Inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialog} from '@angular/material';
import {MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material'; 

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogBoxComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }  

}
