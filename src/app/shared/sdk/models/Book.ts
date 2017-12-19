/* tslint:disable */

declare var Object: any;
export interface BookInterface {
  "id": string;
  "reference": string;
  "barCode": string;
  "barCodeType"?: string;
  "title": string;
  "maximumRetailPrice": number;
  "image"?: any;
  "hsnCode"?: string;
  "discounted"?: string;
  "discountAllowedInd": any;
  "inStockQty": number;
  "manageStock"?: any;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class Book implements BookInterface {
  "id": string;
  "reference": string;
  "barCode": string;
  "barCodeType": string;
  "title": string;
  "maximumRetailPrice": number;
  "image": any;
  "hsnCode": string;
  "discounted": string;
  "discountAllowedInd": any;
  "inStockQty": number;
  "manageStock": any;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: BookInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Book`.
   */
  public static getModelName() {
    return "Book";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Book for dynamic purposes.
  **/
  public static factory(data: BookInterface): Book{
    return new Book(data);
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
      name: 'Book',
      plural: 'Books',
      path: 'Books',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "reference": {
          name: 'reference',
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
        "image": {
          name: 'image',
          type: 'any'
        },
        "hsnCode": {
          name: 'hsnCode',
          type: 'string'
        },
        "discounted": {
          name: 'discounted',
          type: 'string'
        },
        "discountAllowedInd": {
          name: 'discountAllowedInd',
          type: 'any'
        },
        "inStockQty": {
          name: 'inStockQty',
          type: 'number'
        },
        "manageStock": {
          name: 'manageStock',
          type: 'any'
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
      }
    }
  }
}
