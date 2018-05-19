/* tslint:disable */
import {
  Devotee,
  InstrumentIssueRegister
} from '../index';

declare var Object: any;
export interface InstrumentReturnRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": string;
  "returnDate": Date;
  "receiverId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkInstrumentReturnDevoteerel?: Devotee;
  fkInstrumentReturnRegisterInstrumentIssueRegister1rel?: InstrumentIssueRegister;
}

export class InstrumentReturnRegister implements InstrumentReturnRegisterInterface {
  "fundInstrumentId": string;
  "owningDevoteeId": string;
  "receiptNo": string;
  "returnDate": Date;
  "receiverId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkInstrumentReturnDevoteerel: Devotee;
  fkInstrumentReturnRegisterInstrumentIssueRegister1rel: InstrumentIssueRegister;
  constructor(data?: InstrumentReturnRegisterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `InstrumentReturnRegister`.
   */
  public static getModelName() {
    return "InstrumentReturnRegister";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of InstrumentReturnRegister for dynamic purposes.
  **/
  public static factory(data: InstrumentReturnRegisterInterface): InstrumentReturnRegister{
    return new InstrumentReturnRegister(data);
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
      name: 'InstrumentReturnRegister',
      plural: 'InstrumentReturnRegisters',
      path: 'InstrumentReturnRegisters',
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
        "returnDate": {
          name: 'returnDate',
          type: 'Date'
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
        fkInstrumentReturnDevoteerel: {
          name: 'fkInstrumentReturnDevoteerel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'receiverId',
          keyTo: 'id'
        },
        fkInstrumentReturnRegisterInstrumentIssueRegister1rel: {
          name: 'fkInstrumentReturnRegisterInstrumentIssueRegister1rel',
          type: 'InstrumentIssueRegister',
          model: 'InstrumentIssueRegister',
          relationType: 'belongsTo',
                  keyFrom: 'receiptNo',
          keyTo: 'fundInstrumentId'
        },
      }
    }
  }
}
