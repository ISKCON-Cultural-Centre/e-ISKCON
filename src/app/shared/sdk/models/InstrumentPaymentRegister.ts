/* tslint:disable */
import {
  Devotee,
  InstrumentIssueRegister,
  PaymentModeMaster
} from '../index';

declare var Object: any;
export interface InstrumentPaymentRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": string;
  "paymentModeMasterId": string;
  "paymentReference"?: string;
  "paymentDate": Date;
  "amount": number;
  "receiverId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkInstrumentPaymentReceiverrel?: Devotee;
  fkInstrumentPaymentRegisterInstrumentIssueRegister1rel?: InstrumentIssueRegister;
  fkInstrumentPaymentRegisterPaymentModeMaster1rel?: PaymentModeMaster;
}

export class InstrumentPaymentRegister implements InstrumentPaymentRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": string;
  "paymentModeMasterId": string;
  "paymentReference": string;
  "paymentDate": Date;
  "amount": number;
  "receiverId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkInstrumentPaymentReceiverrel: Devotee;
  fkInstrumentPaymentRegisterInstrumentIssueRegister1rel: InstrumentIssueRegister;
  fkInstrumentPaymentRegisterPaymentModeMaster1rel: PaymentModeMaster;
  constructor(data?: InstrumentPaymentRegisterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InstrumentPaymentRegister`.
   */
  public static getModelName() {
    return "InstrumentPaymentRegister";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InstrumentPaymentRegister for dynamic purposes.
  **/
  public static factory(data: InstrumentPaymentRegisterInterface): InstrumentPaymentRegister{
    return new InstrumentPaymentRegister(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'InstrumentPaymentRegister',
      plural: 'InstrumentPaymentRegisters',
      path: 'InstrumentPaymentRegisters',
      idName: 'fundInstrumentId',
      properties: {
        "fundInstrumentId": {
          name: 'fundInstrumentId',
          type: 'string'
        },
        "owningDevoteeId": {
          name: 'owningDevoteeId',
          type: 'string'
        },
        "receiptNo": {
          name: 'receiptNo',
          type: 'string'
        },
        "paymentModeMasterId": {
          name: 'paymentModeMasterId',
          type: 'string'
        },
        "paymentReference": {
          name: 'paymentReference',
          type: 'string'
        },
        "paymentDate": {
          name: 'paymentDate',
          type: 'Date'
        },
        "amount": {
          name: 'amount',
          type: 'number'
        },
        "receiverId": {
          name: 'receiverId',
          type: 'string'
        },
        "createdOn": {
          name: 'createdOn',
          type: 'Date'
        },
        "updatedOn": {
          name: 'updatedOn',
          type: 'Date'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
          type: 'string'
        },
      },
      relations: {
        fkInstrumentPaymentReceiverrel: {
          name: 'fkInstrumentPaymentReceiverrel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'receiverId',
          keyTo: 'id'
        },
        fkInstrumentPaymentRegisterInstrumentIssueRegister1rel: {
          name: 'fkInstrumentPaymentRegisterInstrumentIssueRegister1rel',
          type: 'InstrumentIssueRegister',
          model: 'InstrumentIssueRegister',
          relationType: 'belongsTo',
                  keyFrom: 'receiptNo',
          keyTo: 'fundInstrumentId'
        },
        fkInstrumentPaymentRegisterPaymentModeMaster1rel: {
          name: 'fkInstrumentPaymentRegisterPaymentModeMaster1rel',
          type: 'PaymentModeMaster',
          model: 'PaymentModeMaster',
          relationType: 'belongsTo',
                  keyFrom: 'paymentModeMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
