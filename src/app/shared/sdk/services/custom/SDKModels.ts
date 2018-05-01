/* tslint:disable */
import { Injectable } from '@angular/core';
import { ServiceRole } from '../../models/ServiceRole';
import { ServiceRoleMapping } from '../../models/ServiceRoleMapping';
import { Circle } from '../../models/Circle';
import { Devotee } from '../../models/Devotee';
import { DevoteeEventCalendar } from '../../models/DevoteeEventCalendar';
import { DevoteeKarmiFamily } from '../../models/DevoteeKarmiFamily';
import { DonationTypeMaster } from '../../models/DonationTypeMaster';
import { EventMaster } from '../../models/EventMaster';
import { NewContact } from '../../models/NewContact';
import { OutreachMaster } from '../../models/OutreachMaster';
import { Payment } from '../../models/Payment';
import { PaymentModeMaster } from '../../models/PaymentModeMaster';
import { Pledge } from '../../models/Pledge';
import { PledgePayment } from '../../models/PledgePayment';
import { RelationshipMaster } from '../../models/RelationshipMaster';
import { SpiritualLevelMaster } from '../../models/SpiritualLevelMaster';
import { Temple } from '../../models/Temple';
import { TempleBranch } from '../../models/TempleBranch';
import { ElectronicAddress } from '../../models/ElectronicAddress';
import { ElectronicAddressTypeMaster } from '../../models/ElectronicAddressTypeMaster';
import { PhysicalAddress } from '../../models/PhysicalAddress';
import { PhysicalAddressTypeMaster } from '../../models/PhysicalAddressTypeMaster';
import { ApprovalArtefact } from '../../models/ApprovalArtefact';
import { ApprovalQue } from '../../models/ApprovalQue';
import { ApprovalRule } from '../../models/ApprovalRule';
import { Department } from '../../models/Department';
import { RoleTaskMaster } from '../../models/RoleTaskMaster';
import { TaskMaster } from '../../models/TaskMaster';
import { MgCreditNote } from '../../models/MgCreditNote';
import { MgDeliveryNote } from '../../models/MgDeliveryNote';
import { DevoteeElectronicAddress } from '../../models/DevoteeElectronicAddress';
import { MgInvoice } from '../../models/MgInvoice';
import { MgOrderChannel } from '../../models/MgOrderChannel';
import { MgOrderLine } from '../../models/MgOrderLine';
import { MgOrderReturn } from '../../models/MgOrderReturn';
import { MgOrderReturnLine } from '../../models/MgOrderReturnLine';
import { MgOrderStatus } from '../../models/MgOrderStatus';
import { MgProduct } from '../../models/MgProduct';
import { MgProductAttribute } from '../../models/MgProductAttribute';
import { MgProductAttributeInstance } from '../../models/MgProductAttributeInstance';
import { MgProductSku } from '../../models/MgProductSku';
import { MgStockCurrent } from '../../models/MgStockCurrent';
import { MgStockInward } from '../../models/MgStockInward';
import { MgStockInwardDiary } from '../../models/MgStockInwardDiary';
import { MgSupplier } from '../../models/MgSupplier';
import { MgSupplierElectronicAddress } from '../../models/MgSupplierElectronicAddress';
import { MgSupplierPhysicalAddress } from '../../models/MgSupplierPhysicalAddress';
import { MgTaxCategory } from '../../models/MgTaxCategory';
import { MgTaxCategoryComponent } from '../../models/MgTaxCategoryComponent';
import { MgTaxComponent } from '../../models/MgTaxComponent';
import { MgTaxLine } from '../../models/MgTaxLine';
import { MgUnitOfMeasure } from '../../models/MgUnitOfMeasure';
import { Accesstoken } from '../../models/Accesstoken';
import { AsramaMaster } from '../../models/AsramaMaster';
import { DevoteeAsrama } from '../../models/DevoteeAsrama';
import { DevoteeLanguage } from '../../models/DevoteeLanguage';
import { DevoteeService } from '../../models/DevoteeService';
import { DevoteeServiceAvailability } from '../../models/DevoteeServiceAvailability';
import { DevoteeServiceInterest } from '../../models/DevoteeServiceInterest';
import { DevoteeSkill } from '../../models/DevoteeSkill';
import { DevoteeSpiritualProgress } from '../../models/DevoteeSpiritualProgress';
import { DonationReceipt } from '../../models/DonationReceipt';
import { FestivalCalendar } from '../../models/FestivalCalendar';
import { FestivalMaster } from '../../models/FestivalMaster';
import { Language } from '../../models/Language';
import { MgHsn } from '../../models/MgHsn';
import { MgOrder } from '../../models/MgOrder';
import { ServiceArea } from '../../models/ServiceArea';
import { Skill } from '../../models/Skill';
import { SkillCategory } from '../../models/SkillCategory';
import { LookupTableMaster } from '../../models/LookupTableMaster';
import { LookupTableDetail } from '../../models/LookupTableDetail';
import { LookupMaster } from '../../models/LookupMaster';
import { GothraMaster } from '../../models/GothraMaster';
import { NakshatraMaster } from '../../models/NakshatraMaster';
import { ProfessionMaster } from '../../models/ProfessionMaster';
import { DepartmentCalendar } from '../../models/DepartmentCalendar';
import { DepartmentAnnouncement } from '../../models/DepartmentAnnouncement';
import { GroupMaster } from '../../models/GroupMaster';
import { DevoteeGrouping } from '../../models/DevoteeGrouping';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    ServiceRole: ServiceRole,
    ServiceRoleMapping: ServiceRoleMapping,
    Circle: Circle,
    Devotee: Devotee,
    DevoteeEventCalendar: DevoteeEventCalendar,
    DevoteeKarmiFamily: DevoteeKarmiFamily,
    DonationTypeMaster: DonationTypeMaster,
    EventMaster: EventMaster,
    NewContact: NewContact,
    OutreachMaster: OutreachMaster,
    Payment: Payment,
    PaymentModeMaster: PaymentModeMaster,
    Pledge: Pledge,
    PledgePayment: PledgePayment,
    RelationshipMaster: RelationshipMaster,
    SpiritualLevelMaster: SpiritualLevelMaster,
    Temple: Temple,
    TempleBranch: TempleBranch,
    ElectronicAddress: ElectronicAddress,
    ElectronicAddressTypeMaster: ElectronicAddressTypeMaster,
    PhysicalAddress: PhysicalAddress,
    PhysicalAddressTypeMaster: PhysicalAddressTypeMaster,
    ApprovalArtefact: ApprovalArtefact,
    ApprovalQue: ApprovalQue,
    ApprovalRule: ApprovalRule,
    Department: Department,
    RoleTaskMaster: RoleTaskMaster,
    TaskMaster: TaskMaster,
    MgCreditNote: MgCreditNote,
    MgDeliveryNote: MgDeliveryNote,
    DevoteeElectronicAddress: DevoteeElectronicAddress,
    MgInvoice: MgInvoice,
    MgOrderChannel: MgOrderChannel,
    MgOrderLine: MgOrderLine,
    MgOrderReturn: MgOrderReturn,
    MgOrderReturnLine: MgOrderReturnLine,
    MgOrderStatus: MgOrderStatus,
    MgProduct: MgProduct,
    MgProductAttribute: MgProductAttribute,
    MgProductAttributeInstance: MgProductAttributeInstance,
    MgProductSku: MgProductSku,
    MgStockCurrent: MgStockCurrent,
    MgStockInward: MgStockInward,
    MgStockInwardDiary: MgStockInwardDiary,
    MgSupplier: MgSupplier,
    MgSupplierElectronicAddress: MgSupplierElectronicAddress,
    MgSupplierPhysicalAddress: MgSupplierPhysicalAddress,
    MgTaxCategory: MgTaxCategory,
    MgTaxCategoryComponent: MgTaxCategoryComponent,
    MgTaxComponent: MgTaxComponent,
    MgTaxLine: MgTaxLine,
    MgUnitOfMeasure: MgUnitOfMeasure,
    Accesstoken: Accesstoken,
    AsramaMaster: AsramaMaster,
    DevoteeAsrama: DevoteeAsrama,
    DevoteeLanguage: DevoteeLanguage,
    DevoteeService: DevoteeService,
    DevoteeServiceAvailability: DevoteeServiceAvailability,
    DevoteeServiceInterest: DevoteeServiceInterest,
    DevoteeSkill: DevoteeSkill,
    DevoteeSpiritualProgress: DevoteeSpiritualProgress,
    DonationReceipt: DonationReceipt,
    FestivalCalendar: FestivalCalendar,
    FestivalMaster: FestivalMaster,
    Language: Language,
    MgHsn: MgHsn,
    MgOrder: MgOrder,
    ServiceArea: ServiceArea,
    Skill: Skill,
    SkillCategory: SkillCategory,
    LookupTableMaster: LookupTableMaster,
    LookupTableDetail: LookupTableDetail,
    LookupMaster: LookupMaster,
    GothraMaster: GothraMaster,
    NakshatraMaster: NakshatraMaster,
    ProfessionMaster: ProfessionMaster,
    DepartmentCalendar: DepartmentCalendar,
    DepartmentAnnouncement: DepartmentAnnouncement,
    GroupMaster: GroupMaster,
    DevoteeGrouping: DevoteeGrouping,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
