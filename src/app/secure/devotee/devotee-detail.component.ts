import { Component, OnInit, Input } from '@angular/core';
import {MatCard} from '@angular/material';

@Component({
  selector: 'app-devotee-detail',
  templateUrl: './devotee-detail.component.html',
  styleUrls: ['./devotee-detail.component.css']
})
export class DevoteeDetailComponent implements OnInit {

@Input() devoteeId: String;

  constructor() { }

  ngOnInit() {
  }

}
