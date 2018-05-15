import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';

import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import { Devotee } from '../../shared/sdk/index';
import { DevoteeCardComponent} from './devotee-card.component';


@Component({
  selector: 'app-devotee-lite-search',
  templateUrl: './devotee-lite-search.component.html',
  styleUrls: ['./devotee-lite-search.component.css']
})
export class DevoteeLiteSearchComponent implements OnInit {


  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {

  }

  openDevoteeDialog(devotee: Devotee) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = devotee;

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.dialog.open(DevoteeCardComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      //data => console.log('Dialog output:', data)
    );
}

}

