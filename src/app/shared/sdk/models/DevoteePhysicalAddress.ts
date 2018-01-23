/* tslint:disable */
import {
  Devotee,
  PhysicalAddress
} from '../index';

declare var Object: any;
export interface DevoteePhysicalAddressInterface {
  "devoteeId": string;
  "physicalAddressId": string;
  "preferredFlag": number;
  fkDevoteeAddressDevotee1rel?: Devotee;
  fkDevoteeAddressPhysicalAddress1rel?: PhysicalAddress;
}

export class DevoteePhysicalAddress implements DevoteePhysicalAddressInterface {
  "devoteeId": string;
  "physicalAddressId": string;
  "preferredFlag": number;
  fkDevoteeAddressDevotee1rel: Devotee;
  fkDevoteeAddressPhysicalAddress1rel: PhysicalAddress;
  constructor(data?: DevoteePhysicalAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteePhysicalAddress`.
   */
  public static getModelName() {
    return "DevoteePhysicalAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteePhysicalAddress for dynamic purposes.
  **/
  public static factory(data: DevoteePhysicalAddressInterface): DevoteePhysicalAddress{
    return new DevoteePhysicalAddress(data);
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
      name: 'DevoteePhysicalAddress',
      plural: 'DevoteePhysicalAddresses',
      path: 'DevoteePhysicalAddresses',
      idName: 'physicalAddressId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "physicalAddressId": {
          name: 'physicalAddressId',
          type: 'string'
        },
        "preferredFlag": {
          name: 'preferredFlag',
          type: 'number'
        },
      },
      relations: {
        fkDevoteeAddressDevotee1rel: {
          name: 'fkDevoteeAddressDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeAddressPhysicalAddress1rel: {
          name: 'fkDevoteeAddressPhysicalAddress1rel',
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
