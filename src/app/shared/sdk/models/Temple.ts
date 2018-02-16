/* tslint:disable */
import {
  PhysicalAddress
} from '../index';

declare var Object: any;
export interface TempleInterface {
  "id"?: string;
  "name"?: string;
  "contactNumber"?: string;
  "contactName"?: string;
  "physicalAddressId"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkTemplePhysicalAddress1rel?: PhysicalAddress;
}

export class Temple implements TempleInterface {
  "id": string;
  "name": string;
  "contactNumber": string;
  "contactName": string;
  "physicalAddressId": string;
  "created-on": Date;
  "updated-on": Date;
  fkTemplePhysicalAddress1rel: PhysicalAddress;
  constructor(data?: TempleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Temple`.
   */
  public static getModelName() {
    return "Temple";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Temple for dynamic purposes.
  **/
  public static factory(data: TempleInterface): Temple{
    return new Temple(data);
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
      name: 'Temple',
      plural: 'Temples',
      path: 'Temples',
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
        "contactNumber": {
          name: 'contactNumber',
          type: 'string'
        },
        "contactName": {
          name: 'contactName',
          type: 'string'
        },
        "physicalAddressId": {
          name: 'physicalAddressId',
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
        fkTemplePhysicalAddress1rel: {
          name: 'fkTemplePhysicalAddress1rel',
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
