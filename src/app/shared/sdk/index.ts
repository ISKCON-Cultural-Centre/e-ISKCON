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
import { ServiceRoleApi } from './services/custom/ServiceRole';
import { ServiceRoleMappingApi } from './services/custom/ServiceRoleMapping';
import { CircleApi } from './services/custom/Circle';
import { DevoteeApi } from './services/custom/Devotee';
import { DevoteeEventCalendarApi } from './services/custom/DevoteeEventCalendar';
import { DevoteeKarmiFamilyApi } from './services/custom/DevoteeKarmiFamily';
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
import { RoleTaskMasterApi } from './services/custom/RoleTaskMaster';
import { TaskMasterApi } from './services/custom/TaskMaster';
import { MgCreditNoteApi } from './services/custom/MgCreditNote';
import { MgDeliveryNoteApi } from './services/custom/MgDeliveryNote';
import { DevoteeElectronicAddressApi } from './services/custom/DevoteeElectronicAddress';
import { MgInvoiceApi } from './services/custom/MgInvoice';
import { MgOrderChannelApi } from './services/custom/MgOrderChannel';
import { MgOrderLineApi } from './services/custom/MgOrderLine';
import { MgOrderReturnApi } from './services/custom/MgOrderReturn';
import { MgOrderReturnLineApi } from './services/custom/MgOrderReturnLine';
import { MgOrderStatusApi } from './services/custom/MgOrderStatus';
import { MgProductApi } from './services/custom/MgProduct';
import { MgProductAttributeApi } from './services/custom/MgProductAttribute';
import { MgProductAttributeInstanceApi } from './services/custom/MgProductAttributeInstance';
import { MgProductSkuApi } from './services/custom/MgProductSku';
import { MgStockCurrentApi } from './services/custom/MgStockCurrent';
import { MgStockInwardApi } from './services/custom/MgStockInward';
import { MgStockInwardDiaryApi } from './services/custom/MgStockInwardDiary';
import { MgSupplierApi } from './services/custom/MgSupplier';
import { MgSupplierElectronicAddressApi } from './services/custom/MgSupplierElectronicAddress';
import { MgSupplierPhysicalAddressApi } from './services/custom/MgSupplierPhysicalAddress';
import { MgTaxCategoryApi } from './services/custom/MgTaxCategory';
import { MgTaxCategoryComponentApi } from './services/custom/MgTaxCategoryComponent';
import { MgTaxComponentApi } from './services/custom/MgTaxComponent';
import { MgTaxLineApi } from './services/custom/MgTaxLine';
import { MgUnitOfMeasureApi } from './services/custom/MgUnitOfMeasure';
import { AccesstokenApi } from './services/custom/Accesstoken';
import { AsramaMasterApi } from './services/custom/AsramaMaster';
import { DevoteeAsramaApi } from './services/custom/DevoteeAsrama';
import { DevoteeLanguageApi } from './services/custom/DevoteeLanguage';
import { DevoteeServiceApi } from './services/custom/DevoteeService';
import { DevoteeServiceAvailabilityApi } from './services/custom/DevoteeServiceAvailability';
import { DevoteeServiceInterestApi } from './services/custom/DevoteeServiceInterest';
import { DevoteeSkillApi } from './services/custom/DevoteeSkill';
import { DevoteeSpiritualProgressApi } from './services/custom/DevoteeSpiritualProgress';
import { DonationReceiptApi } from './services/custom/DonationReceipt';
import { FestivalCalendarApi } from './services/custom/FestivalCalendar';
import { FestivalMasterApi } from './services/custom/FestivalMaster';
import { LanguageApi } from './services/custom/Language';
import { MgHsnApi } from './services/custom/MgHsn';
import { MgOrderApi } from './services/custom/MgOrder';
import { ServiceAreaApi } from './services/custom/ServiceArea';
import { SkillApi } from './services/custom/Skill';
import { SkillCategoryApi } from './services/custom/SkillCategory';
import { LookupTableMasterApi } from './services/custom/LookupTableMaster';
import { LookupTableDetailApi } from './services/custom/LookupTableDetail';
import { LookupMasterApi } from './services/custom/LookupMaster';
import { GothraMasterApi } from './services/custom/GothraMaster';
import { NakshatraMasterApi } from './services/custom/NakshatraMaster';
import { ProfessionMasterApi } from './services/custom/ProfessionMaster';
import { DepartmentCalendarApi } from './services/custom/DepartmentCalendar';
import { DepartmentAnnouncementApi } from './services/custom/DepartmentAnnouncement';
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
        ServiceRoleApi,
        ServiceRoleMappingApi,
        CircleApi,
        DevoteeApi,
        DevoteeEventCalendarApi,
        DevoteeKarmiFamilyApi,
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
        RoleTaskMasterApi,
        TaskMasterApi,
        MgCreditNoteApi,
        MgDeliveryNoteApi,
        DevoteeElectronicAddressApi,
        MgInvoiceApi,
        MgOrderChannelApi,
        MgOrderLineApi,
        MgOrderReturnApi,
        MgOrderReturnLineApi,
        MgOrderStatusApi,
        MgProductApi,
        MgProductAttributeApi,
        MgProductAttributeInstanceApi,
        MgProductSkuApi,
        MgStockCurrentApi,
        MgStockInwardApi,
        MgStockInwardDiaryApi,
        MgSupplierApi,
        MgSupplierElectronicAddressApi,
        MgSupplierPhysicalAddressApi,
        MgTaxCategoryApi,
        MgTaxCategoryComponentApi,
        MgTaxComponentApi,
        MgTaxLineApi,
        MgUnitOfMeasureApi,
        AccesstokenApi,
        AsramaMasterApi,
        DevoteeAsramaApi,
        DevoteeLanguageApi,
        DevoteeServiceApi,
        DevoteeServiceAvailabilityApi,
        DevoteeServiceInterestApi,
        DevoteeSkillApi,
        DevoteeSpiritualProgressApi,
        DonationReceiptApi,
        FestivalCalendarApi,
        FestivalMasterApi,
        LanguageApi,
        MgHsnApi,
        MgOrderApi,
        ServiceAreaApi,
        SkillApi,
        SkillCategoryApi,
        LookupTableMasterApi,
        LookupTableDetailApi,
        LookupMasterApi,
        GothraMasterApi,
        NakshatraMasterApi,
        ProfessionMasterApi,
        DepartmentCalendarApi,
        DepartmentAnnouncementApi,
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

