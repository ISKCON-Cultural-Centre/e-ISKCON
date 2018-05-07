/* tslint:disable */

declare var Object: any;
export interface DevoteeEventMasterInterface {
  "id": string;
  "eventName"?: string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class DevoteeEventMaster implements DevoteeEventMasterInterface {
  "id": string;
  "eventName": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: DevoteeEventMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeEventMaster`.
   */
  public static getModelName() {
    return "DevoteeEventMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeEventMaster for dynamic purposes.
  **/
  public static factory(data: DevoteeEventMasterInterface): DevoteeEventMaster{
    return new DevoteeEventMaster(data);
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
      name: 'DevoteeEventMaster',
      plural: 'DevoteeEventMasters',
      path: 'DevoteeEventMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "eventName": {
          name: 'eventName',
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
