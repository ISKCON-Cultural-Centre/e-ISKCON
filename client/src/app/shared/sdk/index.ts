/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { RoleMappingApi } from './services/custom/RoleMapping';
import { RoleApi } from './services/custom/Role';
import { CircleApi } from './services/custom/Circle';
import { DeekshaGuruApi } from './services/custom/DeekshaGuru';
import { DevoteeApi } from './services/custom/Devotee';
import { DevoteeEventCalendarApi } from './services/custom/DevoteeEventCalendar';
import { DevoteeKarmiFamilyApi } from './services/custom/DevoteeKarmiFamily';
import { DevoteeSpiritualFamilyApi } from './services/custom/DevoteeSpiritualFamily';
import { DonationTypeMasterApi } from './services/custom/DonationTypeMaster';
import { EventMasterApi } from './services/custom/EventMaster';
import { NewContactApi } from './services/custom/NewContact';
import { OutreachMasterApi } from './services/custom/OutreachMaster';
import { PaymentApi } from './services/custom/Payment';
import { PaymentModeMasterApi } from './services/custom/PaymentModeMaster';
import { PledgeApi } from './services/custom/Pledge';
import { PledgePaymentApi } from './services/custom/PledgePayment';
import { RelationshipMasterApi } from './services/custom/RelationshipMaster';
import { SpiritualLevelMasterApi } from './services/custom/SpiritualLevelMaster';
import { TempleApi } from './services/custom/Temple';
import { TempleBranchApi } from './services/custom/TempleBranch';
import { ElectronicAddressApi } from './services/custom/ElectronicAddress';
import { ElectronicAddressTypeMasterApi } from './services/custom/ElectronicAddressTypeMaster';
import { PhysicalAddressApi } from './services/custom/PhysicalAddress';
import { PhysicalAddressTypeMasterApi } from './services/custom/PhysicalAddressTypeMaster';
import { ApprovalArtefactApi } from './services/custom/ApprovalArtefact';
import { ApprovalQueApi } from './services/custom/ApprovalQue';
import { ApprovalRuleApi } from './services/custom/ApprovalRule';
import { DepartmentApi } from './services/custom/Department';
import { DepartmentRoleApi } from './services/custom/DepartmentRole';
import { RoleTaskMasterApi } from './services/custom/RoleTaskMaster';
import { TaskMasterApi } from './services/custom/TaskMaster';
import { BookApi } from './services/custom/Book';
import { BookLanguageMapApi } from './services/custom/BookLanguageMap';
import { BookMarathonOrderApi } from './services/custom/BookMarathonOrder';
import { BookMarathonOrderDetailApi } from './services/custom/BookMarathonOrderDetail';
import { BookMarathonReportedSaleApi } from './services/custom/BookMarathonReportedSale';
import { BookMarathonSettlementApi } from './services/custom/BookMarathonSettlement';
import { BookRequestStatusApi } from './services/custom/BookRequestStatus';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        RoleMappingApi,
        RoleApi,
        CircleApi,
        DeekshaGuruApi,
        DevoteeApi,
        DevoteeEventCalendarApi,
        DevoteeKarmiFamilyApi,
        DevoteeSpiritualFamilyApi,
        DonationTypeMasterApi,
        EventMasterApi,
        NewContactApi,
        OutreachMasterApi,
        PaymentApi,
        PaymentModeMasterApi,
        PledgeApi,
        PledgePaymentApi,
        RelationshipMasterApi,
        SpiritualLevelMasterApi,
        TempleApi,
        TempleBranchApi,
        ElectronicAddressApi,
        ElectronicAddressTypeMasterApi,
        PhysicalAddressApi,
        PhysicalAddressTypeMasterApi,
        ApprovalArtefactApi,
        ApprovalQueApi,
        ApprovalRuleApi,
        DepartmentApi,
        DepartmentRoleApi,
        RoleTaskMasterApi,
        TaskMasterApi,
        BookApi,
        BookLanguageMapApi,
        BookMarathonOrderApi,
        BookMarathonOrderDetailApi,
        BookMarathonReportedSaleApi,
        BookMarathonSettlementApi,
        BookRequestStatusApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

