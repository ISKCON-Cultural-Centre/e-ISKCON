/* tslint:disable */
import {
  MgProductAttributeInstance,
  MgProduct,
  MgHsn
} from '../index';

declare var Object: any;
export interface MgProductSkuInterface {
  "id"?: string;
  "barCode": string;
  "barCodeType"?: string;
  "title": string;
  "maximumRetailPrice": number;
  "discounted"?: string;
  "discountAllowedInd": number;
  "inStockQty": number;
  "manageStock"?: number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "productAttributeInstanceId": string;
  "productId": string;
  "sellPrice": number;
  "hsnCode": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkProductInstanceProductAttributeInstance1rel?: MgProductAttributeInstance;
  fkProductSkuProduct1rel?: MgProduct;
  fkProductSkuHsn1rel?: MgHsn;
}

export class MgProductSku implements MgProductSkuInterface {
  "id": string;
  "barCode": string;
  "barCodeType": string;
  "title": string;
  "maximumRetailPrice": number;
  "discounted": string;
  "discountAllowedInd": number;
  "inStockQty": number;
  "manageStock": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "productAttributeInstanceId": string;
  "productId": string;
  "sellPrice": number;
  "hsnCode": string;
  "created-on": Date;
  "updated-on": Date;
  fkProductInstanceProductAttributeInstance1rel: MgProductAttributeInstance;
  fkProductSkuProduct1rel: MgProduct;
  fkProductSkuHsn1rel: MgHsn;
  constructor(data?: MgProductSkuInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgProductSku`.
   */
  public static getModelName() {
    return "MgProductSku";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgProductSku for dynamic purposes.
  **/
  public static factory(data: MgProductSkuInterface): MgProductSku{
    return new MgProductSku(data);
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
      name: 'MgProductSku',
      plural: 'MgProductSkus',
      path: 'MgProductSkus',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "barCode": {
          name: 'barCode',
          type: 'string'
        },
        "barCodeType": {
          name: 'barCodeType',
          type: 'string'
        },
        "title": {
          name: 'title',
          type: 'string'
        },
        "maximumRetailPrice": {
          name: 'maximumRetailPrice',
          type: 'number'
        },
        "discounted": {
          name: 'discounted',
          type: 'string'
        },
        "discountAllowedInd": {
          name: 'discountAllowedInd',
          type: 'number'
        },
        "inStockQty": {
          name: 'inStockQty',
          type: 'number'
        },
        "manageStock": {
          name: 'manageStock',
          type: 'number'
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
        "productAttributeInstanceId": {
          name: 'productAttributeInstanceId',
          type: 'string'
        },
        "productId": {
          name: 'productId',
          type: 'string'
        },
        "sellPrice": {
          name: 'sellPrice',
          type: 'number'
        },
        "hsnCode": {
          name: 'hsnCode',
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
        fkProductInstanceProductAttributeInstance1rel: {
          name: 'fkProductInstanceProductAttributeInstance1rel',
          type: 'MgProductAttributeInstance',
          model: 'MgProductAttributeInstance',
          relationType: 'belongsTo',
                  keyFrom: 'productAttributeInstanceId',
          keyTo: 'id'
        },
        fkProductSkuProduct1rel: {
          name: 'fkProductSkuProduct1rel',
          type: 'MgProduct',
          model: 'MgProduct',
          relationType: 'belongsTo',
                  keyFrom: 'productId',
          keyTo: 'id'
        },
        fkProductSkuHsn1rel: {
          name: 'fkProductSkuHsn1rel',
          type: 'MgHsn',
          model: 'MgHsn',
          relationType: 'belongsTo',
                  keyFrom: 'hsnCode',
          keyTo: 'hsnCode'
        },
      }
    }
  }
}
