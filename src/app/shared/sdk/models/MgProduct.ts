/* tslint:disable */
import {
  MgUnitOfMeasure
} from '../index';

declare var Object: any;
export interface MgProductInterface {
  "id"?: string;
  "name"?: string;
  "unitOfMeasureId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkProductUnitOfMeasure1rel?: MgUnitOfMeasure;
}

export class MgProduct implements MgProductInterface {
  "id": string;
  "name": string;
  "unitOfMeasureId": string;
  "created-on": Date;
  "updated-on": Date;
  fkProductUnitOfMeasure1rel: MgUnitOfMeasure;
  constructor(data?: MgProductInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgProduct`.
   */
  public static getModelName() {
    return "MgProduct";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgProduct for dynamic purposes.
  **/
  public static factory(data: MgProductInterface): MgProduct{
    return new MgProduct(data);
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
      name: 'MgProduct',
      plural: 'MgProducts',
      path: 'MgProducts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "unitOfMeasureId": {
          name: 'unitOfMeasureId',
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
        fkProductUnitOfMeasure1rel: {
          name: 'fkProductUnitOfMeasure1rel',
          type: 'MgUnitOfMeasure',
          model: 'MgUnitOfMeasure',
          relationType: 'belongsTo',
                  keyFrom: 'unitOfMeasureId',
          keyTo: 'id'
        },
      }
    }
  }
}
