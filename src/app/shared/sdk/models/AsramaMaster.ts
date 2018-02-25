/* tslint:disable */

declare var Object: any;
export interface AsramaMasterInterface {
  "id"?: string;
  "asramaName": string;
  "asramaDescription": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class AsramaMaster implements AsramaMasterInterface {
  "id": string;
  "asramaName": string;
  "asramaDescription": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: AsramaMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `AsramaMaster`.
   */
  public static getModelName() {
    return "AsramaMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of AsramaMaster for dynamic purposes.
  **/
  public static factory(data: AsramaMasterInterface): AsramaMaster{
    return new AsramaMaster(data);
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
      name: 'AsramaMaster',
      plural: 'AsramaMasters',
      path: 'AsramaMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "asramaName": {
          name: 'asramaName',
          type: 'string'
        },
        "asramaDescription": {
          name: 'asramaDescription',
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
