import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevoteeComponent } from './devotee.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, DevoteeSearchSelectService } from './../../app/shared/services';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { DevoteeSearchComponent } from './devotee-search.component';
import { DevoteeProfileComponent } from './devotee-profile.component';
import { DevoteeRoleComponent } from './devotee-role.component';
import { CommonComponentsModule } from '../common/common-components.module';
import { DevoteeSkillComponent } from './devotee-skill.component';
import { DevoteeLanguageComponent } from './devotee-language.component';
import { DevoteeServiceInterestComponent } from './devotee-service-interest.component';
import { DevoteeServiceAvailabilityComponent } from './devotee-service-availability.component';

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
    BrowserModule,
    CommonComponentsModule
  ],
  declarations: [
    DevoteeComponent, 
    DevoteeSearchComponent, 
    DevoteeProfileComponent, DevoteeRoleComponent, DevoteeSkillComponent, DevoteeLanguageComponent, DevoteeServiceInterestComponent, DevoteeServiceAvailabilityComponent
  ],
  providers: [
    DevoteeSearchSelectService
  ],
})
export class DevoteeModule { }
