import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevoteeComponent } from './devotee.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard as AuthGuard } from './../../app/shared/services/auth.guard';

const routes: Routes = [
  { path: 'devotee', component: DevoteeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DevoteeComponent]
})
export class DevoteeModule { }
