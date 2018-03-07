import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { InlineEditComponent } from './inline-edit/inline-edit.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialModule
  ],
  declarations: [
    DialogBoxComponent, InlineEditComponent
  ],
  exports: [
    DialogBoxComponent, InlineEditComponent
  ]
})
export class SharedComponentsModule { }
