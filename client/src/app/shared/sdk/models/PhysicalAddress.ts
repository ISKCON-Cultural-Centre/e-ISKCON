/* tslint:disable */

declare var Object: any;
export interface PhysicalAddressInterface {
  "id": string;
  "addressTypeMasterId": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class PhysicalAddress implements PhysicalAddressInterface {
  "id": string;
  "addressTypeMasterId": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: PhysicalAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhysicalAddress`.
   */
  public static getModelName() {
    return "PhysicalAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhysicalAddress for dynamic purposes.
  **/
  public static factory(data: PhysicalAddressInterface): PhysicalAddress{
    return new PhysicalAddress(data);
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
      name: 'PhysicalAddress',
      plural: 'PhysicalAddresses',
      path: 'PhysicalAddresses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "addressTypeMasterId": {
          name: 'addressTypeMasterId',
          type: 'string'
        },
        "addressLine1": {
          name: 'addressLine1',
          type: 'string'
        },
        "addressLine2": {
          name: 'addressLine2',
          type: 'string'
        },
        "addressArea": {
          name: 'addressArea',
          type: 'string'
        },
        "addressCity": {
          name: 'addressCity',
          type: 'string'
        },
        "addressCountry": {
          name: 'addressCountry',
          type: 'string'
        },
        "addressPin": {
          name: 'addressPin',
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
