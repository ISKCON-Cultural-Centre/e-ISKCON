import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { SDKBrowserModule, DevoteeApi } from './shared/sdk';
import { AuthGuard, AuthService } from './shared/services';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { RegisterComponent } from './login/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { DevoteeModule } from '../app/devotee/devotee.module';
import { MyServicesModule } from './my-services/my-services.module';
import { MyActionsModule } from './my-actions/my-actions.module';
import { MyMessagesModule } from './my-messages/my-messages.module';
import { CatalogueModule } from './matchless-gifts/catalogue/catalogue.module';
import { MatchlessGiftsModule } from './matchless-gifts/matchless-gifts.module';
import { MessageService } from './shared/services/message.service';
import { MyServicesService } from './shared/services/myServices.service';
import { GlobalEventsManager } from './shared/services/globalEventsManager.service';
import { NotificationService } from './shared/services/notification.service';
import { LookupModule } from '../app/lookup/lookup.module';
import { LookupService } from './shared/services/lookup.service';
import { DummyService } from './shared/services/dummy.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LoginModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    DevoteeModule,
    MyServicesModule,
    MyActionsModule,
    MyMessagesModule,
    CatalogueModule,
    MatchlessGiftsModule,
    LookupModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MessageService,
    MyServicesService,
    GlobalEventsManager,
    NotificationService,
    DevoteeApi,  
    LookupService,
    DummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
