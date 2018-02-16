/* tslint:disable */
import {
  MgTaxCategory,
  MgTaxComponent
} from '../index';

declare var Object: any;
export interface MgTaxCategoryComponentInterface {
  "taxCategoryId": string;
  "taxComponentId": string;
  "taxPercent": string;
  fkTaxCategoryComponentTaxCategory1rel?: MgTaxCategory;
  fkTaxCategoryComponentTaxComponent1rel?: MgTaxComponent;
}

export class MgTaxCategoryComponent implements MgTaxCategoryComponentInterface {
  "taxCategoryId": string;
  "taxComponentId": string;
  "taxPercent": string;
  fkTaxCategoryComponentTaxCategory1rel: MgTaxCategory;
  fkTaxCategoryComponentTaxComponent1rel: MgTaxComponent;
  constructor(data?: MgTaxCategoryComponentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgTaxCategoryComponent`.
   */
  public static getModelName() {
    return "MgTaxCategoryComponent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgTaxCategoryComponent for dynamic purposes.
  **/
  public static factory(data: MgTaxCategoryComponentInterface): MgTaxCategoryComponent{
    return new MgTaxCategoryComponent(data);
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
      name: 'MgTaxCategoryComponent',
      plural: 'MgTaxCategoryComponents',
      path: 'MgTaxCategoryComponents',
      idName: 'taxCategoryId',
      properties: {
        "taxCategoryId": {
          name: 'taxCategoryId',
          type: 'string'
        },
        "taxComponentId": {
          name: 'taxComponentId',
          type: 'string'
        },
        "taxPercent": {
          name: 'taxPercent',
          type: 'string'
        },
      },
      relations: {
        fkTaxCategoryComponentTaxCategory1rel: {
          name: 'fkTaxCategoryComponentTaxCategory1rel',
          type: 'MgTaxCategory',
          model: 'MgTaxCategory',
          relationType: 'belongsTo',
                  keyFrom: 'taxCategoryId',
          keyTo: 'id'
        },
        fkTaxCategoryComponentTaxComponent1rel: {
          name: 'fkTaxCategoryComponentTaxComponent1rel',
          type: 'MgTaxComponent',
          model: 'MgTaxComponent',
          relationType: 'belongsTo',
                  keyFrom: 'taxComponentId',
          keyTo: 'id'
        },
      }
    }
  }
}
