import { Component, OnInit } from '@angular/core';
import { Devotee } from '../shared/sdk/models/Devotee';
import { DevoteeApi } from '../shared/sdk/services/custom/Devotee';

@Component({
  selector: 'app-home',
  templateUrl: './devotee.component.html',
  styleUrls: ['./devotee.component.css']
})
export class DevoteeComponent implements OnInit {
  devotees: Devotee[] = [];

  constructor(private devoteeApi: DevoteeApi) {
    this.getAllDevotees();
  }

  ngOnInit() {
  }

  getAllDevotees() {
    this.devoteeApi.find()
      .subscribe((devotees) => {
        console.log(devotees);
      }, err => {
        alert(err && err.message ? err.message : 'Fetching Devotees Failed');
      });
  }


}
