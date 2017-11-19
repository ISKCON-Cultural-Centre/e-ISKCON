/* tslint:disable */
import {
  Devotee,
  Book
} from '../index';

declare var Object: any;
export interface BookMarathonReportedSaleInterface {
  "id": string;
  "date": Date;
  "saleQuantity"?: number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "bookId": string;
  "devoteeId": string;
  fkBookMarathonReportedSaleDevotee1rel?: Devotee;
  fkTbookMarathonReportedSaleBook1rel?: Book;
}

export class BookMarathonReportedSale implements BookMarathonReportedSaleInterface {
  "id": string;
  "date": Date;
  "saleQuantity": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "bookId": string;
  "devoteeId": string;
  fkBookMarathonReportedSaleDevotee1rel: Devotee;
  fkTbookMarathonReportedSaleBook1rel: Book;
  constructor(data?: BookMarathonReportedSaleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookMarathonReportedSale`.
   */
  public static getModelName() {
    return "BookMarathonReportedSale";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookMarathonReportedSale for dynamic purposes.
  **/
  public static factory(data: BookMarathonReportedSaleInterface): BookMarathonReportedSale{
    return new BookMarathonReportedSale(data);
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
      name: 'BookMarathonReportedSale',
      plural: 'BookMarathonReportedSales',
      path: 'BookMarathonReportedSales',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "saleQuantity": {
          name: 'saleQuantity',
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
        "bookId": {
          name: 'bookId',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
      },
      relations: {
        fkBookMarathonReportedSaleDevotee1rel: {
          name: 'fkBookMarathonReportedSaleDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkTbookMarathonReportedSaleBook1rel: {
          name: 'fkTbookMarathonReportedSaleBook1rel',
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
