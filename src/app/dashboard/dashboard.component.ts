import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 3, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 3, rows: 1, color: '#DDBDF1'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

