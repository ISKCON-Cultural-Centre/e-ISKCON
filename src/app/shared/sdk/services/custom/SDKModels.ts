/* tslint:disable */
import { Injectable } from '@angular/core';
import { Accesstoken } from '../../models/Accesstoken';
import { ApprovalArtefact } from '../../models/ApprovalArtefact';
import { ApprovalQue } from '../../models/ApprovalQue';
import { ApprovalRule } from '../../models/ApprovalRule';
import { AsramaMaster } from '../../models/AsramaMaster';
import { Circle } from '../../models/Circle';
import { Department } from '../../models/Department';
import { DepartmentAnnouncement } from '../../models/DepartmentAnnouncement';
import { DepartmentEvent } from '../../models/DepartmentEvent';
import { Devotee } from '../../models/Devotee';
import { DevoteeAsrama } from '../../models/DevoteeAsrama';
import { DevoteeElectronicAddress } from '../../models/DevoteeElectronicAddress';
import { DevoteeEventCalendar } from '../../models/DevoteeEventCalendar';
import { DevoteeEventMaster } from '../../models/DevoteeEventMaster';
import { DevoteeGrouping } from '../../models/DevoteeGrouping';
import { DevoteeKarmiFamily } from '../../models/DevoteeKarmiFamily';
import { DevoteeLanguage } from '../../models/DevoteeLanguage';
import { DevoteeService } from '../../models/DevoteeService';
import { DevoteeServiceAvailability } from '../../models/DevoteeServiceAvailability';
import { DevoteeServiceInterest } from '../../models/DevoteeServiceInterest';
import { DevoteeSkill } from '../../models/DevoteeSkill';
import { DevoteeSpiritualProgress } from '../../models/DevoteeSpiritualProgress';
import { DonationCategoryMaster } from '../../models/DonationCategoryMaster';
import { DonationReceipt } from '../../models/DonationReceipt';
import { DonationTypeMaster } from '../../models/DonationTypeMaster';
import { ElectronicAddress } from '../../models/ElectronicAddress';
import { ElectronicAddressTypeMaster } from '../../models/ElectronicAddressTypeMaster';
import { EventDonationItem } from '../../models/EventDonationItem';
import { EventDonationMaster } from '../../models/EventDonationMaster';
import { EventMaster } from '../../models/EventMaster';
import { EventService } from '../../models/EventService';
import { EventServiceMaster } from '../../models/EventServiceMaster';
import { FestivalCalendar } from '../../models/FestivalCalendar';
import { FestivalMaster } from '../../models/FestivalMaster';
import { GothraMaster } from '../../models/GothraMaster';
import { GroupMaster } from '../../models/GroupMaster';
import { Guru } from '../../models/Guru';
import { Language } from '../../models/Language';
import { LookupTableDetail } from '../../models/LookupTableDetail';
import { LookupTableMaster } from '../../models/LookupTableMaster';
import { MgCreditNote } from '../../models/MgCreditNote';
import { MgDeliveryNote } from '../../models/MgDeliveryNote';
import { MgHsn } from '../../models/MgHsn';
import { MgInvoice } from '../../models/MgInvoice';
import { MgOrder } from '../../models/MgOrder';
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
import { NakshatraMaster } from '../../models/NakshatraMaster';
import { NewContact } from '../../models/NewContact';
import { OutreachMaster } from '../../models/OutreachMaster';
import { Payment } from '../../models/Payment';
import { PaymentModeMaster } from '../../models/PaymentModeMaster';
import { PhysicalAddress } from '../../models/PhysicalAddress';
import { PhysicalAddressTypeMaster } from '../../models/PhysicalAddressTypeMaster';
import { Pledge } from '../../models/Pledge';
import { PledgePayment } from '../../models/PledgePayment';
import { ProfessionMaster } from '../../models/ProfessionMaster';
import { RelationshipMaster } from '../../models/RelationshipMaster';
import { RoleTaskMaster } from '../../models/RoleTaskMaster';
import { ServiceArea } from '../../models/ServiceArea';
import { ServiceRole } from '../../models/ServiceRole';
import { ServiceRoleMapping } from '../../models/ServiceRoleMapping';
import { Skill } from '../../models/Skill';
import { SkillCategory } from '../../models/SkillCategory';
import { SpiritualLevelMaster } from '../../models/SpiritualLevelMaster';
import { TaskMaster } from '../../models/TaskMaster';
import { Temple } from '../../models/Temple';
import { TempleBranch } from '../../models/TempleBranch';
import { FundInstrument } from '../../models/FundInstrument';
import { FundInstrumentType } from '../../models/FundInstrumentType';
import { InstrumentIssueRegister } from '../../models/InstrumentIssueRegister';
import { InstrumentReturnRegister } from '../../models/InstrumentReturnRegister';
import { InstrumentPaymentRegister } from '../../models/InstrumentPaymentRegister';
import { Organization } from '../../models/Organization';
import { OrganizationLevelMaster } from '../../models/OrganizationLevelMaster';
import { OrganizationTree } from '../../models/OrganizationTree';
import { OrganizationChildren } from '../../models/OrganizationChildren';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Accesstoken: Accesstoken,
    ApprovalArtefact: ApprovalArtefact,
    ApprovalQue: ApprovalQue,
    ApprovalRule: ApprovalRule,
    AsramaMaster: AsramaMaster,
    Circle: Circle,
    Department: Department,
    DepartmentAnnouncement: DepartmentAnnouncement,
    DepartmentEvent: DepartmentEvent,
    Devotee: Devotee,
    DevoteeAsrama: DevoteeAsrama,
    DevoteeElectronicAddress: DevoteeElectronicAddress,
    DevoteeEventCalendar: DevoteeEventCalendar,
    DevoteeEventMaster: DevoteeEventMaster,
    DevoteeGrouping: DevoteeGrouping,
    DevoteeKarmiFamily: DevoteeKarmiFamily,
    DevoteeLanguage: DevoteeLanguage,
    DevoteeService: DevoteeService,
    DevoteeServiceAvailability: DevoteeServiceAvailability,
    DevoteeServiceInterest: DevoteeServiceInterest,
    DevoteeSkill: DevoteeSkill,
    DevoteeSpiritualProgress: DevoteeSpiritualProgress,
    DonationCategoryMaster: DonationCategoryMaster,
    DonationReceipt: DonationReceipt,
    DonationTypeMaster: DonationTypeMaster,
    ElectronicAddress: ElectronicAddress,
    ElectronicAddressTypeMaster: ElectronicAddressTypeMaster,
    EventDonationItem: EventDonationItem,
    EventDonationMaster: EventDonationMaster,
    EventMaster: EventMaster,
    EventService: EventService,
    EventServiceMaster: EventServiceMaster,
    FestivalCalendar: FestivalCalendar,
    FestivalMaster: FestivalMaster,
    GothraMaster: GothraMaster,
    GroupMaster: GroupMaster,
    Guru: Guru,
    Language: Language,
    LookupTableDetail: LookupTableDetail,
    LookupTableMaster: LookupTableMaster,
    MgCreditNote: MgCreditNote,
    MgDeliveryNote: MgDeliveryNote,
    MgHsn: MgHsn,
    MgInvoice: MgInvoice,
    MgOrder: MgOrder,
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
    NakshatraMaster: NakshatraMaster,
    NewContact: NewContact,
    OutreachMaster: OutreachMaster,
    Payment: Payment,
    PaymentModeMaster: PaymentModeMaster,
    PhysicalAddress: PhysicalAddress,
    PhysicalAddressTypeMaster: PhysicalAddressTypeMaster,
    Pledge: Pledge,
    PledgePayment: PledgePayment,
    ProfessionMaster: ProfessionMaster,
    RelationshipMaster: RelationshipMaster,
    RoleTaskMaster: RoleTaskMaster,
    ServiceArea: ServiceArea,
    ServiceRole: ServiceRole,
    ServiceRoleMapping: ServiceRoleMapping,
    Skill: Skill,
    SkillCategory: SkillCategory,
    SpiritualLevelMaster: SpiritualLevelMaster,
    TaskMaster: TaskMaster,
    Temple: Temple,
    TempleBranch: TempleBranch,
    FundInstrument: FundInstrument,
    FundInstrumentType: FundInstrumentType,
    InstrumentIssueRegister: InstrumentIssueRegister,
    InstrumentReturnRegister: InstrumentReturnRegister,
    InstrumentPaymentRegister: InstrumentPaymentRegister,
    Organization: Organization,
    OrganizationLevelMaster: OrganizationLevelMaster,
    OrganizationTree: OrganizationTree,
    OrganizationChildren: OrganizationChildren,
    
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
