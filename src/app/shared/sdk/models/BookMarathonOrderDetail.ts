/* tslint:disable */
import {
  Book
} from '../index';

declare var Object: any;
export interface BookMarathonOrderDetailInterface {
  "bookMarathonOrderId": string;
  "bookId": string;
  "requestQty": number;
  "approvedQty"?: number;
  "packedQty"?: number;
  "mrp": string;
  "sellPrice": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkBookMarathonOrderDetailBook1rel?: Book;
}

export class BookMarathonOrderDetail implements BookMarathonOrderDetailInterface {
  "bookMarathonOrderId": string;
  "bookId": string;
  "requestQty": number;
  "approvedQty": number;
  "packedQty": number;
  "mrp": string;
  "sellPrice": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkBookMarathonOrderDetailBook1rel: Book;
  constructor(data?: BookMarathonOrderDetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookMarathonOrderDetail`.
   */
  public static getModelName() {
    return "BookMarathonOrderDetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookMarathonOrderDetail for dynamic purposes.
  **/
  public static factory(data: BookMarathonOrderDetailInterface): BookMarathonOrderDetail{
    return new BookMarathonOrderDetail(data);
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
      name: 'BookMarathonOrderDetail',
      plural: 'BookMarathonOrderDetails',
      path: 'BookMarathonOrderDetails',
      idName: 'bookId',
      properties: {
        "bookMarathonOrderId": {
          name: 'bookMarathonOrderId',
          type: 'string'
        },
        "bookId": {
          name: 'bookId',
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
        fkBookMarathonOrderDetailBook1rel: {
          name: 'fkBookMarathonOrderDetailBook1rel',
          type: 'Book',
          model: 'Book',
          relationType: 'belongsTo',
                  keyFrom: 'bookId',
          keyTo: 'id'
        },
      }
    }
  }
}
