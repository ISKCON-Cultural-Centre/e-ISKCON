import {Component, OnInit, OnDestroy} from '@angular/core';
import {DashboardCard} from './cards/dashboard-card';
import {Observable} from 'rxjs/Observable';
import {DashboardCardsService} from './dashboard-cards.service';
import {ObservableMedia} from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { Subscription } from 'rxjs/Subscription';

import {DashboardUsersComponent} from './cards/dashboard-users/dashboard-users.component';
import { EventCalendarComponent } from './../../secure/organization/event-calendar.component';
import { MyServicesComponent } from '../../secure/my-services/my-services.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  entryComponents: [DashboardUsersComponent]
})
export class DashboardComponent implements OnInit, OnDestroy {

  one$ = new Subscription();

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_sml: Observable<number>;

  constructor(private cardsService: DashboardCardsService,
              private observableMedia: ObservableMedia) {
    this.one$ = this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });
  }

  ngOnInit() {
    /* Grid column map */
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 8],
      ['lg', 10],
      ['xl', 18]
    ]);
    /* Big card column span map */
    const cols_map_big = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    /* Small card column span map */
    const cols_map_sml = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.observableMedia.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
    this.cols_big = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_big.get(change.mqAlias);
      }).startWith(start_cols_big);
    this.cols_sml = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_sml.get(change.mqAlias);
      }).startWith(start_cols_sml);

      if (this.cards.length === 0 ) {
        this.createCards();
      }
  }

  createCards(): void {
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Calendar'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/organization/eventCalendar'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_big
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, EventCalendarComponent /* Reference to the component we'd like to spawn */
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/myServices'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: this.cols_big
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: this.cols_big
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, MyServicesComponent
      )
    );
  }

  ngOnDestroy(){
    this.one$.unsubscribe();
   }  

}