/* tslint:disable */
import {
  MgProductSku
} from '../index';

declare var Object: any;
export interface MgStockCurrentInterface {
  "id"?: string;
  "productSkuId": string;
  "quantity": number;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkProductStockCurrentProductSku1rel?: MgProductSku;
}

export class MgStockCurrent implements MgStockCurrentInterface {
  "id": string;
  "productSkuId": string;
  "quantity": number;
  "created-on": Date;
  "updated-on": Date;
  fkProductStockCurrentProductSku1rel: MgProductSku;
  constructor(data?: MgStockCurrentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgStockCurrent`.
   */
  public static getModelName() {
    return "MgStockCurrent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgStockCurrent for dynamic purposes.
  **/
  public static factory(data: MgStockCurrentInterface): MgStockCurrent{
    return new MgStockCurrent(data);
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
      name: 'MgStockCurrent',
      plural: 'MgStockCurrents',
      path: 'MgStockCurrents',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "productSkuId": {
          name: 'productSkuId',
          type: 'string'
        },
        "quantity": {
          name: 'quantity',
          type: 'number'
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
        fkProductStockCurrentProductSku1rel: {
          name: 'fkProductStockCurrentProductSku1rel',
          type: 'MgProductSku',
          model: 'MgProductSku',
          relationType: 'belongsTo',
                  keyFrom: 'productSkuId',
          keyTo: 'id'
        },
      }
    }
  }
}
