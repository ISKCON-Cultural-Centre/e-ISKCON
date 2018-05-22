import { Component, OnInit } from '@angular/core';

//import { RawPrintService } from '../../../shared/services/raw-print.service';
import * as print from 'print-js';

@Component({
  selector: 'app-event-planner',
  templateUrl: './event-planner.component.html',
  styleUrls: ['./event-planner.component.css']
})
export class EventPlannerComponent implements OnInit {

  public qrCode: string = null;
  constructor (
    //private rawPrintService: RawPrintService,
  ) {
      // assign a value
      this.qrCode = 'Your QR code data string';
  }

  ngOnInit() {
/*     this.rawPrintService.getPrinters().subscribe(
      printers => {
        console.log(printers);
      }
    ); */
  }

}

