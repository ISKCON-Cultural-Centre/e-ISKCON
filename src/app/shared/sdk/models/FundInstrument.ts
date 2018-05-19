/* tslint:disable */
import {
  FundInstrumentType
} from '../index';

declare var Object: any;
export interface FundInstrumentInterface {
  "id": string;
  "instrumentRefNo": string;
  "receiptInstrumentTypeId": string;
  "startNo": number;
  "endNo": number;
  "currentStartNo": number;
  "currentEndNo": number;
  "statusId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkReceiptInstrumentDetailReceiptInstrumentMaster1rel?: FundInstrumentType;
}

export class FundInstrument implements FundInstrumentInterface {
  "id": string;
  "instrumentRefNo": string;
  "receiptInstrumentTypeId": string;
  "startNo": number;
  "endNo": number;
  "currentStartNo": number;
  "currentEndNo": number;
  "statusId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkReceiptInstrumentDetailReceiptInstrumentMaster1rel: FundInstrumentType;
  constructor(data?: FundInstrumentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FundInstrument`.
   */
  public static getModelName() {
    return "FundInstrument";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FundInstrument for dynamic purposes.
  **/
  public static factory(data: FundInstrumentInterface): FundInstrument{
    return new FundInstrument(data);
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
      name: 'FundInstrument',
      plural: 'FundInstruments',
      path: 'FundInstruments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "instrumentRefNo": {
          name: 'instrumentRefNo',
          type: 'string'
        },
        "receiptInstrumentTypeId": {
          name: 'receiptInstrumentTypeId',
          type: 'string'
        },
        "startNo": {
          name: 'startNo',
          type: 'number'
        },
        "endNo": {
          name: 'endNo',
          type: 'number'
        },
        "currentStartNo": {
          name: 'currentStartNo',
          type: 'number'
        },
        "currentEndNo": {
          name: 'currentEndNo',
          type: 'number'
        },
        "statusId": {
          name: 'statusId',
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
        "created-on": {
          name: 'created-on',
          type: 'Date'
        },
        "updated-on": {
          name: 'updated-on',
          type: 'Date'
        },
      },
      relations: {
        fkReceiptInstrumentDetailReceiptInstrumentMaster1rel: {
          name: 'fkReceiptInstrumentDetailReceiptInstrumentMaster1rel',
          type: 'FundInstrumentType',
          model: 'FundInstrumentType',
          relationType: 'belongsTo',
                  keyFrom: 'receiptInstrumentTypeId',
          keyTo: 'id'
        },
      }
    }
  }
}
