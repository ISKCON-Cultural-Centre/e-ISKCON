import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LookupComponent } from '../lookup.component';
import { MaterialModule } from '../../material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    FormsModule
  ],
  declarations: []
})
export class LookupEntryModule { }
