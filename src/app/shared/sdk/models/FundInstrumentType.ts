/* tslint:disable */
import {
  FundInstrument
} from '../index';

declare var Object: any;
export interface FundInstrumentTypeInterface {
  "id": string;
  "instrumentName": string;
  "denomination"?: number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fundInstruments?: FundInstrument[];
}

export class FundInstrumentType implements FundInstrumentTypeInterface {
  "id": string;
  "instrumentName": string;
  "denomination": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fundInstruments: FundInstrument[];
  constructor(data?: FundInstrumentTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FundInstrumentType`.
   */
  public static getModelName() {
    return "FundInstrumentType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FundInstrumentType for dynamic purposes.
  **/
  public static factory(data: FundInstrumentTypeInterface): FundInstrumentType{
    return new FundInstrumentType(data);
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
      name: 'FundInstrumentType',
      plural: 'FundInstrumentTypes',
      path: 'FundInstrumentTypes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "instrumentName": {
          name: 'instrumentName',
          type: 'string'
        },
        "denomination": {
          name: 'denomination',
          type: 'number'
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
        fundInstruments: {
          name: 'fundInstruments',
          type: 'FundInstrument[]',
          model: 'FundInstrument',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'receiptInstrumentTypeId'
        },
      }
    }
  }
}
