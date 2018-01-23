/* tslint:disable */
import {
  MgOrderReturn,
  MgProductSku
} from '../index';

declare var Object: any;
export interface MgOrderReturnLineInterface {
  "orderReturnId": string;
  "productInstanceId": string;
  "returnQty": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkOrderReturnLineOrderReturn1rel?: MgOrderReturn;
  fkBookMarathonReturnDetailBook1rel?: MgProductSku;
}

export class MgOrderReturnLine implements MgOrderReturnLineInterface {
  "orderReturnId": string;
  "productInstanceId": string;
  "returnQty": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkOrderReturnLineOrderReturn1rel: MgOrderReturn;
  fkBookMarathonReturnDetailBook1rel: MgProductSku;
  constructor(data?: MgOrderReturnLineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrderReturnLine`.
   */
  public static getModelName() {
    return "MgOrderReturnLine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrderReturnLine for dynamic purposes.
  **/
  public static factory(data: MgOrderReturnLineInterface): MgOrderReturnLine{
    return new MgOrderReturnLine(data);
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
      name: 'MgOrderReturnLine',
      plural: 'MgOrderReturnLines',
      path: 'MgOrderReturnLines',
      idName: 'orderReturnId',
      properties: {
        "orderReturnId": {
          name: 'orderReturnId',
          type: 'string'
        },
        "productInstanceId": {
          name: 'productInstanceId',
          type: 'string'
        },
        "returnQty": {
          name: 'returnQty',
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
      },
      relations: {
        fkOrderReturnLineOrderReturn1rel: {
          name: 'fkOrderReturnLineOrderReturn1rel',
          type: 'MgOrderReturn',
          model: 'MgOrderReturn',
          relationType: 'belongsTo',
                  keyFrom: 'orderReturnId',
          keyTo: 'id'
        },
        fkBookMarathonReturnDetailBook1rel: {
          name: 'fkBookMarathonReturnDetailBook1rel',
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
