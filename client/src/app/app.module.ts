import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UserModule } from './pages/user-module/user.module';


import { MaterialModule } from './material.module';

import { SDKBrowserModule } from './sdk';
import { AuthGuard, AuthService } from './services';

import { AppComponent } from './app.component';
import { NavgationComponent } from './shared/navgation/navgation.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/user-module/login/login.component';
import { ResetPasswordComponent } from './pages/user-module/reset-password/reset-password.component';

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
    UserModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'reset', component: ResetPasswordComponent },
      { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/' }
    ])
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
