/* tslint:disable */

declare var Object: any;
export interface ElectronicAddressTypeMasterInterface {
  "id"?: string;
  "name"?: string;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class ElectronicAddressTypeMaster implements ElectronicAddressTypeMasterInterface {
  "id": string;
  "name": string;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: ElectronicAddressTypeMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ElectronicAddressTypeMaster`.
   */
  public static getModelName() {
    return "ElectronicAddressTypeMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ElectronicAddressTypeMaster for dynamic purposes.
  **/
  public static factory(data: ElectronicAddressTypeMasterInterface): ElectronicAddressTypeMaster{
    return new ElectronicAddressTypeMaster(data);
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
      name: 'ElectronicAddressTypeMaster',
      plural: 'ElectronicAddressTypeMasters',
      path: 'ElectronicAddressTypeMasters',
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
      }
    }
  }
}
