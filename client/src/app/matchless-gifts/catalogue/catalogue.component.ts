import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../shared/sdk/services/core/dummy.service';
import { Book } from '../../shared/sdk';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public titles:Object[];
  constructor(private dummyService: DummyService) {
    this.getCatalogue();
  }

  ngOnInit() {
  }

  getCatalogue() {
    this.dummyService.getCatalogueJSON()
      .subscribe((res) => {
        this.titles = res;
      }, err => {
        alert(err && err.message ? err.message : 'Something Wrong!');
      });
  }

}
