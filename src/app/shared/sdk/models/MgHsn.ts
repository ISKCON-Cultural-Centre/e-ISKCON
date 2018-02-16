/* tslint:disable */
import {
  MgTaxCategory
} from '../index';

declare var Object: any;
export interface MgHsnInterface {
  "hsnCode": string;
  "taxCategoryId": string;
  fkHsnTaxCategoryTaxCategory1rel?: MgTaxCategory;
}

export class MgHsn implements MgHsnInterface {
  "hsnCode": string;
  "taxCategoryId": string;
  fkHsnTaxCategoryTaxCategory1rel: MgTaxCategory;
  constructor(data?: MgHsnInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgHsn`.
   */
  public static getModelName() {
    return "MgHsn";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgHsn for dynamic purposes.
  **/
  public static factory(data: MgHsnInterface): MgHsn{
    return new MgHsn(data);
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
      name: 'MgHsn',
      plural: 'MgHsns',
      path: 'MgHsns',
      idName: 'hsnCode',
      properties: {
        "hsnCode": {
          name: 'hsnCode',
          type: 'string'
        },
        "taxCategoryId": {
          name: 'taxCategoryId',
          type: 'string'
        },
      },
      relations: {
        fkHsnTaxCategoryTaxCategory1rel: {
          name: 'fkHsnTaxCategoryTaxCategory1rel',
          type: 'MgTaxCategory',
          model: 'MgTaxCategory',
          relationType: 'belongsTo',
                  keyFrom: 'taxCategoryId',
          keyTo: 'id'
        },
      }
    }
  }
}
