/* tslint:disable */

declare var Object: any;
export interface MgUnitOfMeasureInterface {
  "id"?: string;
  "uomName"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgUnitOfMeasure implements MgUnitOfMeasureInterface {
  "id": string;
  "uomName": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgUnitOfMeasureInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgUnitOfMeasure`.
   */
  public static getModelName() {
    return "MgUnitOfMeasure";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgUnitOfMeasure for dynamic purposes.
  **/
  public static factory(data: MgUnitOfMeasureInterface): MgUnitOfMeasure{
    return new MgUnitOfMeasure(data);
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
      name: 'MgUnitOfMeasure',
      plural: 'MgUnitOfMeasures',
      path: 'MgUnitOfMeasures',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "uomName": {
          name: 'uomName',
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
