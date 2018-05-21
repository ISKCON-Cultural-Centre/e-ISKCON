import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-planner',
  templateUrl: './event-planner.component.html',
  styleUrls: ['./event-planner.component.css']
})
export class EventPlannerComponent implements OnInit {

  public qrCode: string = null;
  constructor () {
      // assign a value
      this.qrCode = 'Your QR code data string';
  }

  ngOnInit() {
  }

}

