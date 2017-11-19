/* tslint:disable */
import {
  Book
} from '../index';

declare var Object: any;
export interface BookLanguageMapInterface {
  "bookId": string;
  "englishBookId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkBookLanguageMapProduct1rel?: Book;
  fkBookLanguageMapProduct2rel?: Book;
}

export class BookLanguageMap implements BookLanguageMapInterface {
  "bookId": string;
  "englishBookId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkBookLanguageMapProduct1rel: Book;
  fkBookLanguageMapProduct2rel: Book;
  constructor(data?: BookLanguageMapInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookLanguageMap`.
   */
  public static getModelName() {
    return "BookLanguageMap";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookLanguageMap for dynamic purposes.
  **/
  public static factory(data: BookLanguageMapInterface): BookLanguageMap{
    return new BookLanguageMap(data);
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
      name: 'BookLanguageMap',
      plural: 'BookLanguageMaps',
      path: 'BookLanguageMaps',
      idName: 'bookId',
      properties: {
        "bookId": {
          name: 'bookId',
          type: 'string'
        },
        "englishBookId": {
          name: 'englishBookId',
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
        fkBookLanguageMapProduct1rel: {
          name: 'fkBookLanguageMapProduct1rel',
          type: 'Book',
          model: 'Book',
          relationType: 'belongsTo',
                  keyFrom: 'bookId',
          keyTo: 'id'
        },
        fkBookLanguageMapProduct2rel: {
          name: 'fkBookLanguageMapProduct2rel',
          type: 'Book',
          model: 'Book',
          relationType: 'belongsTo',
                  keyFrom: 'englishBookId',
          keyTo: 'id'
        },
      }
    }
  }
}
