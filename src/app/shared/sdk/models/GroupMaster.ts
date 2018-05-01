/* tslint:disable */

declare var Object: any;
export interface GroupMasterInterface {
  "id": string;
  "name"?: string;
  "description"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class GroupMaster implements GroupMasterInterface {
  "id": string;
  "name": string;
  "description": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: GroupMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GroupMaster`.
   */
  public static getModelName() {
    return "GroupMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GroupMaster for dynamic purposes.
  **/
  public static factory(data: GroupMasterInterface): GroupMaster{
    return new GroupMaster(data);
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
      name: 'GroupMaster',
      plural: 'GroupMasters',
      path: 'GroupMasters',
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
        "description": {
          name: 'description',
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
