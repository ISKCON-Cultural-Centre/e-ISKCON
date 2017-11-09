import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { DevoteeModule } from './pages/devotee/devotee.module';


import { MaterialModule } from './material.module';

import { SDKBrowserModule } from './shared/sdk';
import { AuthGuard, AuthService } from './services';

import { AppComponent } from './app.component';
import { NavgationComponent } from './shared/navgation/navgation.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/devotee/login/login.component';
import { ResetPasswordComponent } from './pages/devotee/reset-password/reset-password.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavgationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    DevoteeModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
