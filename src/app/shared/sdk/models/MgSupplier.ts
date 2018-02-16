/* tslint:disable */

declare var Object: any;
export interface MgSupplierInterface {
  "id"?: string;
  "supplierName": string;
  "taxIdentificationNumber": string;
  "gstnNumber": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgSupplier implements MgSupplierInterface {
  "id": string;
  "supplierName": string;
  "taxIdentificationNumber": string;
  "gstnNumber": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgSupplierInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgSupplier`.
   */
  public static getModelName() {
    return "MgSupplier";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgSupplier for dynamic purposes.
  **/
  public static factory(data: MgSupplierInterface): MgSupplier{
    return new MgSupplier(data);
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
      name: 'MgSupplier',
      plural: 'MgSuppliers',
      path: 'MgSuppliers',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "supplierName": {
          name: 'supplierName',
          type: 'string'
        },
        "taxIdentificationNumber": {
          name: 'taxIdentificationNumber',
          type: 'string'
        },
        "gstnNumber": {
          name: 'gstnNumber',
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
