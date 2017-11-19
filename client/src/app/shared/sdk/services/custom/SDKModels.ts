/* tslint:disable */
import { Injectable } from '@angular/core';
import { RoleMapping } from '../../models/RoleMapping';
import { Role } from '../../models/Role';
import { Circle } from '../../models/Circle';
import { DeekshaGuru } from '../../models/DeekshaGuru';
import { Devotee } from '../../models/Devotee';
import { DevoteeEventCalendar } from '../../models/DevoteeEventCalendar';
import { DevoteeKarmiFamily } from '../../models/DevoteeKarmiFamily';
import { DevoteeSpiritualFamily } from '../../models/DevoteeSpiritualFamily';
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
import { DepartmentRole } from '../../models/DepartmentRole';
import { RoleTaskMaster } from '../../models/RoleTaskMaster';
import { TaskMaster } from '../../models/TaskMaster';
import { Book } from '../../models/Book';
import { BookLanguageMap } from '../../models/BookLanguageMap';
import { BookMarathonOrder } from '../../models/BookMarathonOrder';
import { BookMarathonOrderDetail } from '../../models/BookMarathonOrderDetail';
import { BookMarathonReportedSale } from '../../models/BookMarathonReportedSale';
import { BookMarathonSettlement } from '../../models/BookMarathonSettlement';
import { BookRequestStatus } from '../../models/BookRequestStatus';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    RoleMapping: RoleMapping,
    Role: Role,
    Circle: Circle,
    DeekshaGuru: DeekshaGuru,
    Devotee: Devotee,
    DevoteeEventCalendar: DevoteeEventCalendar,
    DevoteeKarmiFamily: DevoteeKarmiFamily,
    DevoteeSpiritualFamily: DevoteeSpiritualFamily,
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
    DepartmentRole: DepartmentRole,
    RoleTaskMaster: RoleTaskMaster,
    TaskMaster: TaskMaster,
    Book: Book,
    BookLanguageMap: BookLanguageMap,
    BookMarathonOrder: BookMarathonOrder,
    BookMarathonOrderDetail: BookMarathonOrderDetail,
    BookMarathonReportedSale: BookMarathonReportedSale,
    BookMarathonSettlement: BookMarathonSettlement,
    BookRequestStatus: BookRequestStatus,
    
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
