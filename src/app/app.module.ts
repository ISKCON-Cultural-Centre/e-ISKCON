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
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './public/login/login.module';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { MessagesComponent } from './secure/messages/messages.component';
import { DevoteeModule } from './secure/devotee/devotee.module';
import { MyServicesModule } from './secure/my-services/my-services.module';
import { MyActionsModule } from './secure/my-actions/my-actions.module';
import { MyMessagesModule } from './secure/my-messages/my-messages.module';
import { CatalogueModule } from './secure/matchless-gifts/catalogue/catalogue.module';
import { MatchlessGiftsModule } from './secure/matchless-gifts/matchless-gifts.module';
import { MessageService } from './shared/services/message.service';
import { MyServicesService } from './shared/services/myServices.service';
import { GlobalEventsManager } from './shared/services/globalEventsManager.service';
import { NotificationService } from './shared/services/notification.service';
import { FormErrorService } from './shared/services/form.error.service';
import { LookupModule } from './secure/lookup/lookup.module';
import { LookupService } from './shared/services/lookup.service';
import { DummyService } from './shared/services/dummy.service';
import { OrganizationModule } from './secure/organization/organization.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { CommonComponentsModule } from './secure/common/common-components.module';
import { SecureComponent } from './layout/secure';
import { PublicComponent } from './layout/public';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    MessagesComponent,
    SecureComponent,
    PublicComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LoginModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    RouterModule,
    DevoteeModule,
    MyServicesModule,
    MyActionsModule,
    MyMessagesModule,
    CatalogueModule,
    MatchlessGiftsModule,
    LookupModule,
    OrganizationModule,
    SharedComponentsModule,
    CommonComponentsModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    MessageService,
    MyServicesService,
    GlobalEventsManager,
    NotificationService,
    FormErrorService,
    DevoteeApi,
    LookupService,
    DummyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
