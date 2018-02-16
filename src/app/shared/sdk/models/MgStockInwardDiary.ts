/* tslint:disable */
import {
  MgProductSku,
  MgStockInward
} from '../index';

declare var Object: any;
export interface MgStockInwardDiaryInterface {
  "stockInwardId": string;
  "lineNumber": number;
  "productSkuId": string;
  "col": number;
  fkStockInwardDiaryProductSku1rel?: MgProductSku;
  fkStockInwardDiaryStockInward1rel?: MgStockInward;
}

export class MgStockInwardDiary implements MgStockInwardDiaryInterface {
  "stockInwardId": string;
  "lineNumber": number;
  "productSkuId": string;
  "col": number;
  fkStockInwardDiaryProductSku1rel: MgProductSku;
  fkStockInwardDiaryStockInward1rel: MgStockInward;
  constructor(data?: MgStockInwardDiaryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgStockInwardDiary`.
   */
  public static getModelName() {
    return "MgStockInwardDiary";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgStockInwardDiary for dynamic purposes.
  **/
  public static factory(data: MgStockInwardDiaryInterface): MgStockInwardDiary{
    return new MgStockInwardDiary(data);
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
      name: 'MgStockInwardDiary',
      plural: 'MgStockInwardDiaries',
      path: 'MgStockInwardDiaries',
      idName: 'lineNumber',
      properties: {
        "stockInwardId": {
          name: 'stockInwardId',
          type: 'string'
        },
        "lineNumber": {
          name: 'lineNumber',
          type: 'number'
        },
        "productSkuId": {
          name: 'productSkuId',
          type: 'string'
        },
        "col": {
          name: 'col',
          type: 'number'
        },
      },
      relations: {
        fkStockInwardDiaryProductSku1rel: {
          name: 'fkStockInwardDiaryProductSku1rel',
          type: 'MgProductSku',
          model: 'MgProductSku',
          relationType: 'belongsTo',
                  keyFrom: 'productSkuId',
          keyTo: 'id'
        },
        fkStockInwardDiaryStockInward1rel: {
          name: 'fkStockInwardDiaryStockInward1rel',
          type: 'MgStockInward',
          model: 'MgStockInward',
          relationType: 'belongsTo',
                  keyFrom: 'stockInwardId',
          keyTo: 'id'
        },
      }
    }
  }
}
