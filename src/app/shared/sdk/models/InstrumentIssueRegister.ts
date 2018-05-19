/* tslint:disable */
import {
  FundInstrument,
  Devotee
} from '../index';

declare var Object: any;
export interface InstrumentIssueRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": number;
  "issueDate": Date;
  "issuerId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkInstrumentIssueRegisterReceiptInstrument1rel?: FundInstrument;
  fkInstrumentIssuedDevoteerel?: Devotee;
}

export class InstrumentIssueRegister implements InstrumentIssueRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": number;
  "issueDate": Date;
  "issuerId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkInstrumentIssueRegisterReceiptInstrument1rel: FundInstrument;
  fkInstrumentIssuedDevoteerel: Devotee;
  constructor(data?: InstrumentIssueRegisterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InstrumentIssueRegister`.
   */
  public static getModelName() {
    return "InstrumentIssueRegister";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InstrumentIssueRegister for dynamic purposes.
  **/
  public static factory(data: InstrumentIssueRegisterInterface): InstrumentIssueRegister{
    return new InstrumentIssueRegister(data);
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
      name: 'InstrumentIssueRegister',
      plural: 'InstrumentIssueRegisters',
      path: 'InstrumentIssueRegisters',
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
          type: 'number'
        },
        "issueDate": {
          name: 'issueDate',
          type: 'Date'
        },
        "issuerId": {
          name: 'issuerId',
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
        fkInstrumentIssueRegisterReceiptInstrument1rel: {
          name: 'fkInstrumentIssueRegisterReceiptInstrument1rel',
          type: 'FundInstrument',
          model: 'FundInstrument',
          relationType: 'belongsTo',
                  keyFrom: 'fundInstrumentId',
          keyTo: 'id'
        },
        fkInstrumentIssuedDevoteerel: {
          name: 'fkInstrumentIssuedDevoteerel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'issuerId',
          keyTo: 'id'
        },
      }
    }
  }
}
