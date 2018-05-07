/* tslint:disable */
import {
  MgOrder,
  MgProductSku
} from '../index';

declare var Object: any;
export interface MgOrderLineInterface {
  "orderId": string;
  "productInstanceId": string;
  "requestQty": number;
  "approvedQty"?: number;
  "packedQty"?: number;
  "mrp": string;
  "sellPrice": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkBookMarathonOrderDetailBookMarathonOrder1rel?: MgOrder;
  fkBookMarathonOrderDetailBook1rel?: MgProductSku;
}

export class MgOrderLine implements MgOrderLineInterface {
  "orderId": string;
  "productInstanceId": string;
  "requestQty": number;
  "approvedQty": number;
  "packedQty": number;
  "mrp": string;
  "sellPrice": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkBookMarathonOrderDetailBookMarathonOrder1rel: MgOrder;
  fkBookMarathonOrderDetailBook1rel: MgProductSku;
  constructor(data?: MgOrderLineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrderLine`.
   */
  public static getModelName() {
    return "MgOrderLine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrderLine for dynamic purposes.
  **/
  public static factory(data: MgOrderLineInterface): MgOrderLine{
    return new MgOrderLine(data);
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
      name: 'MgOrderLine',
      plural: 'MgOrderLines',
      path: 'MgOrderLines',
      idName: 'orderId',
      properties: {
        "orderId": {
          name: 'orderId',
          type: 'string'
        },
        "productInstanceId": {
          name: 'productInstanceId',
          type: 'string'
        },
        "requestQty": {
          name: 'requestQty',
          type: 'number'
        },
        "approvedQty": {
          name: 'approvedQty',
          type: 'number'
        },
        "packedQty": {
          name: 'packedQty',
          type: 'number'
        },
        "mrp": {
          name: 'mrp',
          type: 'string'
        },
        "sellPrice": {
          name: 'sellPrice',
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
      },
      relations: {
        fkBookMarathonOrderDetailBookMarathonOrder1rel: {
          name: 'fkBookMarathonOrderDetailBookMarathonOrder1rel',
          type: 'MgOrder',
          model: 'MgOrder',
          relationType: 'belongsTo',
                  keyFrom: 'orderId',
          keyTo: 'id'
        },
        fkBookMarathonOrderDetailBook1rel: {
          name: 'fkBookMarathonOrderDetailBook1rel',
          type: 'MgProductSku',
          model: 'MgProductSku',
          relationType: 'belongsTo',
                  keyFrom: 'productInstanceId',
          keyTo: 'id'
        },
      }
    }
  }
}
