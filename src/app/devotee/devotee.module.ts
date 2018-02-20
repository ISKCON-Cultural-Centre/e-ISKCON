import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevoteeComponent } from './devotee.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard as AuthGuard } from './../../app/shared/services/auth.guard';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DevoteeListComponent } from './devotee-list.component';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path: 'devotee', component: DevoteeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserModule
  ],
  declarations: [DevoteeComponent, DevoteeListComponent]
})
export class DevoteeModule { }
