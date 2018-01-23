/* tslint:disable */

declare var Object: any;
export interface MgTaxCategoryInterface {
  "id"?: string;
  "taxCategoryName": string;
  "taxPercent": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgTaxCategory implements MgTaxCategoryInterface {
  "id": string;
  "taxCategoryName": string;
  "taxPercent": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgTaxCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgTaxCategory`.
   */
  public static getModelName() {
    return "MgTaxCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgTaxCategory for dynamic purposes.
  **/
  public static factory(data: MgTaxCategoryInterface): MgTaxCategory{
    return new MgTaxCategory(data);
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
      name: 'MgTaxCategory',
      plural: 'MgTaxCategories',
      path: 'MgTaxCategories',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "taxCategoryName": {
          name: 'taxCategoryName',
          type: 'string'
        },
        "taxPercent": {
          name: 'taxPercent',
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
      }
    }
  }
}
