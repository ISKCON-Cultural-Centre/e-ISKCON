/* tslint:disable */

declare var Object: any;
export interface NakshatraMasterInterface {
  "nakshatra": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class NakshatraMaster implements NakshatraMasterInterface {
  "nakshatra": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: NakshatraMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NakshatraMaster`.
   */
  public static getModelName() {
    return "NakshatraMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NakshatraMaster for dynamic purposes.
  **/
  public static factory(data: NakshatraMasterInterface): NakshatraMaster{
    return new NakshatraMaster(data);
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
      name: 'NakshatraMaster',
      plural: 'NakshatraMasters',
      path: 'NakshatraMasters',
      idName: 'nakshatra',
      properties: {
        "nakshatra": {
          name: 'nakshatra',
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
      }
    }
  }
}
