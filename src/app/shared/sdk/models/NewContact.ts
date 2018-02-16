/* tslint:disable */
import {
  ElectronicAddress,
  PhysicalAddress
} from '../index';

declare var Object: any;
export interface NewContactInterface {
  "id"?: string;
  "name"?: string;
  "physicalAddressId"?: string;
  "electronicAddressId"?: string;
  "reference"?: string;
  "comments"?: string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkTable1ElectronicAddress1rel?: ElectronicAddress;
  fkTable1PhysicalAddress1rel?: PhysicalAddress;
}

export class NewContact implements NewContactInterface {
  "id": string;
  "name": string;
  "physicalAddressId": string;
  "electronicAddressId": string;
  "reference": string;
  "comments": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkTable1ElectronicAddress1rel: ElectronicAddress;
  fkTable1PhysicalAddress1rel: PhysicalAddress;
  constructor(data?: NewContactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NewContact`.
   */
  public static getModelName() {
    return "NewContact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NewContact for dynamic purposes.
  **/
  public static factory(data: NewContactInterface): NewContact{
    return new NewContact(data);
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
      name: 'NewContact',
      plural: 'NewContacts',
      path: 'NewContacts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "physicalAddressId": {
          name: 'physicalAddressId',
          type: 'string'
        },
        "electronicAddressId": {
          name: 'electronicAddressId',
          type: 'string'
        },
        "reference": {
          name: 'reference',
          type: 'string'
        },
        "comments": {
          name: 'comments',
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
        fkTable1ElectronicAddress1rel: {
          name: 'fkTable1ElectronicAddress1rel',
          type: 'ElectronicAddress',
          model: 'ElectronicAddress',
          relationType: 'belongsTo',
                  keyFrom: 'electronicAddressId',
          keyTo: 'id'
        },
        fkTable1PhysicalAddress1rel: {
          name: 'fkTable1PhysicalAddress1rel',
          type: 'PhysicalAddress',
          model: 'PhysicalAddress',
          relationType: 'belongsTo',
                  keyFrom: 'physicalAddressId',
          keyTo: 'id'
        },
      }
    }
  }
}
