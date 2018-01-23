/* tslint:disable */

declare var Object: any;
export interface MgStockInwardInterface {
  "id"?: string;
  "supplierInvoiceNumber": string;
  "invoiceDate": Date;
  "supplierId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgStockInward implements MgStockInwardInterface {
  "id": string;
  "supplierInvoiceNumber": string;
  "invoiceDate": Date;
  "supplierId": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgStockInwardInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgStockInward`.
   */
  public static getModelName() {
    return "MgStockInward";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgStockInward for dynamic purposes.
  **/
  public static factory(data: MgStockInwardInterface): MgStockInward{
    return new MgStockInward(data);
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
      name: 'MgStockInward',
      plural: 'MgStockInwards',
      path: 'MgStockInwards',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "supplierInvoiceNumber": {
          name: 'supplierInvoiceNumber',
          type: 'string'
        },
        "invoiceDate": {
          name: 'invoiceDate',
          type: 'Date'
        },
        "supplierId": {
          name: 'supplierId',
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
