/* tslint:disable */
import {
  Devotee,
  ElectronicAddress
} from '../index';

declare var Object: any;
export interface DevoteeElectronicAddressInterface {
  "devoteeId": string;
  "electronicAddressId": string;
  "preferredFlag": number;
  fkDevoteeElectronicAddressDevotee1rel?: Devotee;
  fkDevoteeElectronicAddressElectronicAddress1rel?: ElectronicAddress;
}

export class DevoteeElectronicAddress implements DevoteeElectronicAddressInterface {
  "devoteeId": string;
  "electronicAddressId": string;
  "preferredFlag": number;
  fkDevoteeElectronicAddressDevotee1rel: Devotee;
  fkDevoteeElectronicAddressElectronicAddress1rel: ElectronicAddress;
  constructor(data?: DevoteeElectronicAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeElectronicAddress`.
   */
  public static getModelName() {
    return "DevoteeElectronicAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeElectronicAddress for dynamic purposes.
  **/
  public static factory(data: DevoteeElectronicAddressInterface): DevoteeElectronicAddress{
    return new DevoteeElectronicAddress(data);
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
      name: 'DevoteeElectronicAddress',
      plural: 'DevoteeElectronicAddresses',
      path: 'DevoteeElectronicAddresses',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "electronicAddressId": {
          name: 'electronicAddressId',
          type: 'string'
        },
        "preferredFlag": {
          name: 'preferredFlag',
          type: 'number'
        },
      },
      relations: {
        fkDevoteeElectronicAddressDevotee1rel: {
          name: 'fkDevoteeElectronicAddressDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeElectronicAddressElectronicAddress1rel: {
          name: 'fkDevoteeElectronicAddressElectronicAddress1rel',
          type: 'ElectronicAddress',
          model: 'ElectronicAddress',
          relationType: 'belongsTo',
                  keyFrom: 'electronicAddressId',
          keyTo: 'id'
        },
      }
    }
  }
}
