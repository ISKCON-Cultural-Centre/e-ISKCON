import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardCardsSpawnerComponent } from './cards/dashboard-cards-spawner/dashboard-cards-spawner.component';
import { DashboardUsersComponent } from './cards/dashboard-users/dashboard-users.component';
import { DashboardCardsService } from './dashboard-cards.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    DashboardComponent,
    DashboardCardsSpawnerComponent,
    DashboardUsersComponent,
  ],
  providers: [DashboardCardsService]
})
export class DashboardModule { }
