import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';

import { SDKBrowserModule } from './shared/sdk';
import { AuthGuard, AuthService } from './shared/services';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { NavgationComponent } from './navgation/navgation.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './login/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './components/dashboard.component';
import { DevoteeComponent } from './components/devotee.component';
import { DevoteeModule } from '../app/devotee/devotee.module';
import { MyServicesModule } from './my-services/my-services.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavgationComponent,
    HomeComponent,
    DashboardComponent,
    DevoteeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    DevoteeModule,
    MyServicesModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
