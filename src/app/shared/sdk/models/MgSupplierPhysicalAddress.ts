/* tslint:disable */
import {
  PhysicalAddress,
  MgSupplier
} from '../index';

declare var Object: any;
export interface MgSupplierPhysicalAddressInterface {
  "physicalAddressId": string;
  "supplierId": string;
  fkSupplierAddressPhysicalAddress1rel?: PhysicalAddress;
  fkSupplierPhysicalAddressSupplier1rel?: MgSupplier;
}

export class MgSupplierPhysicalAddress implements MgSupplierPhysicalAddressInterface {
  "physicalAddressId": string;
  "supplierId": string;
  fkSupplierAddressPhysicalAddress1rel: PhysicalAddress;
  fkSupplierPhysicalAddressSupplier1rel: MgSupplier;
  constructor(data?: MgSupplierPhysicalAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgSupplierPhysicalAddress`.
   */
  public static getModelName() {
    return "MgSupplierPhysicalAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgSupplierPhysicalAddress for dynamic purposes.
  **/
  public static factory(data: MgSupplierPhysicalAddressInterface): MgSupplierPhysicalAddress{
    return new MgSupplierPhysicalAddress(data);
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
      name: 'MgSupplierPhysicalAddress',
      plural: 'MgSupplierPhysicalAddresses',
      path: 'MgSupplierPhysicalAddresses',
      idName: 'physicalAddressId',
      properties: {
        "physicalAddressId": {
          name: 'physicalAddressId',
          type: 'string'
        },
        "supplierId": {
          name: 'supplierId',
          type: 'string'
        },
      },
      relations: {
        fkSupplierAddressPhysicalAddress1rel: {
          name: 'fkSupplierAddressPhysicalAddress1rel',
          type: 'PhysicalAddress',
          model: 'PhysicalAddress',
          relationType: 'belongsTo',
                  keyFrom: 'physicalAddressId',
          keyTo: 'id'
        },
        fkSupplierPhysicalAddressSupplier1rel: {
          name: 'fkSupplierPhysicalAddressSupplier1rel',
          type: 'MgSupplier',
          model: 'MgSupplier',
          relationType: 'belongsTo',
                  keyFrom: 'supplierId',
          keyTo: 'id'
        },
      }
    }
  }
}
