/* tslint:disable */
import {
  Devotee,
  BookRequestStatus
} from '../index';

declare var Object: any;
export interface BookMarathonOrderInterface {
  "id": string;
  "requestDateTime": Date;
  "requestNo": number;
  "orderNo": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "bookRequestStatusId": string;
  "devoteeId": string;
  fkTable1Devotee2rel?: Devotee;
  fkTable1BookRequestStatus1rel?: BookRequestStatus;
}

export class BookMarathonOrder implements BookMarathonOrderInterface {
  "id": string;
  "requestDateTime": Date;
  "requestNo": number;
  "orderNo": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "bookRequestStatusId": string;
  "devoteeId": string;
  fkTable1Devotee2rel: Devotee;
  fkTable1BookRequestStatus1rel: BookRequestStatus;
  constructor(data?: BookMarathonOrderInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookMarathonOrder`.
   */
  public static getModelName() {
    return "BookMarathonOrder";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookMarathonOrder for dynamic purposes.
  **/
  public static factory(data: BookMarathonOrderInterface): BookMarathonOrder{
    return new BookMarathonOrder(data);
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
      name: 'BookMarathonOrder',
      plural: 'BookMarathonOrders',
      path: 'BookMarathonOrders',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "requestDateTime": {
          name: 'requestDateTime',
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
        "bookRequestStatusId": {
          name: 'bookRequestStatusId',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
      },
      relations: {
        fkTable1Devotee2rel: {
          name: 'fkTable1Devotee2rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkTable1BookRequestStatus1rel: {
          name: 'fkTable1BookRequestStatus1rel',
          type: 'BookRequestStatus',
          model: 'BookRequestStatus',
          relationType: 'belongsTo',
                  keyFrom: 'bookRequestStatusId',
          keyTo: 'id'
        },
      }
    }
  }
}
