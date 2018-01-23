/* tslint:disable */
import {
  ElectronicAddress,
  MgSupplier
} from '../index';

declare var Object: any;
export interface MgSupplierElectronicAddressInterface {
  "electronicAddressId": string;
  "supplierId": string;
  fkSupplierElectronicAddressElectronicAddress1rel?: ElectronicAddress;
  fkSupplierElectronicAddressSupplier1rel?: MgSupplier;
}

export class MgSupplierElectronicAddress implements MgSupplierElectronicAddressInterface {
  "electronicAddressId": string;
  "supplierId": string;
  fkSupplierElectronicAddressElectronicAddress1rel: ElectronicAddress;
  fkSupplierElectronicAddressSupplier1rel: MgSupplier;
  constructor(data?: MgSupplierElectronicAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgSupplierElectronicAddress`.
   */
  public static getModelName() {
    return "MgSupplierElectronicAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgSupplierElectronicAddress for dynamic purposes.
  **/
  public static factory(data: MgSupplierElectronicAddressInterface): MgSupplierElectronicAddress{
    return new MgSupplierElectronicAddress(data);
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
      name: 'MgSupplierElectronicAddress',
      plural: 'MgSupplierElectronicAddresses',
      path: 'MgSupplierElectronicAddresses',
      idName: 'supplierId',
      properties: {
        "electronicAddressId": {
          name: 'electronicAddressId',
          type: 'string'
        },
        "supplierId": {
          name: 'supplierId',
          type: 'string'
        },
      },
      relations: {
        fkSupplierElectronicAddressElectronicAddress1rel: {
          name: 'fkSupplierElectronicAddressElectronicAddress1rel',
          type: 'ElectronicAddress',
          model: 'ElectronicAddress',
          relationType: 'belongsTo',
                  keyFrom: 'electronicAddressId',
          keyTo: 'id'
        },
        fkSupplierElectronicAddressSupplier1rel: {
          name: 'fkSupplierElectronicAddressSupplier1rel',
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
