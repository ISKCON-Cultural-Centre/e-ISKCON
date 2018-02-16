/* tslint:disable */

declare var Object: any;
export interface MgOrderChannelInterface {
  "id"?: string;
  "name"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgOrderChannel implements MgOrderChannelInterface {
  "id": string;
  "name": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgOrderChannelInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrderChannel`.
   */
  public static getModelName() {
    return "MgOrderChannel";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrderChannel for dynamic purposes.
  **/
  public static factory(data: MgOrderChannelInterface): MgOrderChannel{
    return new MgOrderChannel(data);
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
      name: 'MgOrderChannel',
      plural: 'MgOrderChannels',
      path: 'MgOrderChannels',
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
