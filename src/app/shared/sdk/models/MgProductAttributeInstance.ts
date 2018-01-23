/* tslint:disable */
import {
  MgProductAttribute
} from '../index';

declare var Object: any;
export interface MgProductAttributeInstanceInterface {
  "id"?: string;
  "productAttributeInstanceValue": string;
  "productAttributeId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkProductAttributeInstanceProductAttribute1rel?: MgProductAttribute;
}

export class MgProductAttributeInstance implements MgProductAttributeInstanceInterface {
  "id": string;
  "productAttributeInstanceValue": string;
  "productAttributeId": string;
  "created-on": Date;
  "updated-on": Date;
  fkProductAttributeInstanceProductAttribute1rel: MgProductAttribute;
  constructor(data?: MgProductAttributeInstanceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgProductAttributeInstance`.
   */
  public static getModelName() {
    return "MgProductAttributeInstance";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgProductAttributeInstance for dynamic purposes.
  **/
  public static factory(data: MgProductAttributeInstanceInterface): MgProductAttributeInstance{
    return new MgProductAttributeInstance(data);
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
      name: 'MgProductAttributeInstance',
      plural: 'MgProductAttributeInstances',
      path: 'MgProductAttributeInstances',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "productAttributeInstanceValue": {
          name: 'productAttributeInstanceValue',
          type: 'string'
        },
        "productAttributeId": {
          name: 'productAttributeId',
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
        fkProductAttributeInstanceProductAttribute1rel: {
          name: 'fkProductAttributeInstanceProductAttribute1rel',
          type: 'MgProductAttribute',
          model: 'MgProductAttribute',
          relationType: 'belongsTo',
                  keyFrom: 'productAttributeId',
          keyTo: 'id'
        },
      }
    }
  }
}
