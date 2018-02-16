/* tslint:disable */
import {
  Devotee,
  MgOrderChannel,
  MgOrderStatus
} from '../index';

declare var Object: any;
export interface MgOrderInterface {
  "id"?: string;
  "orderDateTime": Date;
  "requestNo": number;
  "orderNo": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "orderStatusId": string;
  "devoteeId": string;
  "servingDevoteeId"?: string;
  "orderChannelId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkOrderDevotee1rel?: Devotee;
  fkOrderOrderChannel1rel?: MgOrderChannel;
  fkTable1BookRequestStatus1rel?: MgOrderStatus;
  fkTable1Devotee2rel?: Devotee;
}

export class MgOrder implements MgOrderInterface {
  "id": string;
  "orderDateTime": Date;
  "requestNo": number;
  "orderNo": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "orderStatusId": string;
  "devoteeId": string;
  "servingDevoteeId": string;
  "orderChannelId": string;
  "created-on": Date;
  "updated-on": Date;
  fkOrderDevotee1rel: Devotee;
  fkOrderOrderChannel1rel: MgOrderChannel;
  fkTable1BookRequestStatus1rel: MgOrderStatus;
  fkTable1Devotee2rel: Devotee;
  constructor(data?: MgOrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrder`.
   */
  public static getModelName() {
    return "MgOrder";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrder for dynamic purposes.
  **/
  public static factory(data: MgOrderInterface): MgOrder{
    return new MgOrder(data);
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
      name: 'MgOrder',
      plural: 'MgOrders',
      path: 'MgOrders',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "orderDateTime": {
          name: 'orderDateTime',
          type: 'Date'
        },
        "requestNo": {
          name: 'requestNo',
          type: 'number'
        },
        "orderNo": {
          name: 'orderNo',
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
        "orderStatusId": {
          name: 'orderStatusId',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "servingDevoteeId": {
          name: 'servingDevoteeId',
          type: 'string'
        },
        "orderChannelId": {
          name: 'orderChannelId',
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
        fkOrderDevotee1rel: {
          name: 'fkOrderDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'servingDevoteeId',
          keyTo: 'id'
        },
        fkOrderOrderChannel1rel: {
          name: 'fkOrderOrderChannel1rel',
          type: 'MgOrderChannel',
          model: 'MgOrderChannel',
          relationType: 'belongsTo',
                  keyFrom: 'orderChannelId',
          keyTo: 'id'
        },
        fkTable1BookRequestStatus1rel: {
          name: 'fkTable1BookRequestStatus1rel',
          type: 'MgOrderStatus',
          model: 'MgOrderStatus',
          relationType: 'belongsTo',
                  keyFrom: 'orderStatusId',
          keyTo: 'id'
        },
        fkTable1Devotee2rel: {
          name: 'fkTable1Devotee2rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
