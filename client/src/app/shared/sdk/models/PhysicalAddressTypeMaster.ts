/* tslint:disable */

declare var Object: any;
export interface PhysicalAddressTypeMasterInterface {
  "id": string;
  "addressType": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class PhysicalAddressTypeMaster implements PhysicalAddressTypeMasterInterface {
  "id": string;
  "addressType": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: PhysicalAddressTypeMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhysicalAddressTypeMaster`.
   */
  public static getModelName() {
    return "PhysicalAddressTypeMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhysicalAddressTypeMaster for dynamic purposes.
  **/
  public static factory(data: PhysicalAddressTypeMasterInterface): PhysicalAddressTypeMaster{
    return new PhysicalAddressTypeMaster(data);
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
      name: 'PhysicalAddressTypeMaster',
      plural: 'PhysicalAddressTypeMasters',
      path: 'PhysicalAddressTypeMasters',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "addressType": {
          name: 'addressType',
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
      }
    }
  }
}
