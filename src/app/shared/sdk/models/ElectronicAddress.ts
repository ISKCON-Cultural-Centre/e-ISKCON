/* tslint:disable */
import {
  ElectronicAddressTypeMaster
} from '../index';

declare var Object: any;
export interface ElectronicAddressInterface {
  "id": string;
  "electronicAddressTypeMasterId": string;
  "electronicAddress": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkElectronicAddressElectronicAddressTypeMaster1rel?: ElectronicAddressTypeMaster;
}

export class ElectronicAddress implements ElectronicAddressInterface {
  "id": string;
  "electronicAddressTypeMasterId": string;
  "electronicAddress": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkElectronicAddressElectronicAddressTypeMaster1rel: ElectronicAddressTypeMaster;
  constructor(data?: ElectronicAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ElectronicAddress`.
   */
  public static getModelName() {
    return "ElectronicAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ElectronicAddress for dynamic purposes.
  **/
  public static factory(data: ElectronicAddressInterface): ElectronicAddress{
    return new ElectronicAddress(data);
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
      name: 'ElectronicAddress',
      plural: 'ElectronicAddresses',
      path: 'ElectronicAddresses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "electronicAddressTypeMasterId": {
          name: 'electronicAddressTypeMasterId',
          type: 'string'
        },
        "electronicAddress": {
          name: 'electronicAddress',
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
        fkElectronicAddressElectronicAddressTypeMaster1rel: {
          name: 'fkElectronicAddressElectronicAddressTypeMaster1rel',
          type: 'ElectronicAddressTypeMaster',
          model: 'ElectronicAddressTypeMaster',
          relationType: 'belongsTo',
                  keyFrom: 'electronicAddressTypeMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
