/* tslint:disable */

declare var Object: any;
export interface GothraMasterInterface {
  "gothra": string;
}

export class GothraMaster implements GothraMasterInterface {
  "gothra": string;
  constructor(data?: GothraMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GothraMaster`.
   */
  public static getModelName() {
    return "GothraMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of GothraMaster for dynamic purposes.
  **/
  public static factory(data: GothraMasterInterface): GothraMaster{
    return new GothraMaster(data);
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
      name: 'GothraMaster',
      plural: 'GothraMasters',
      path: 'GothraMasters',
      idName: 'gothra',
      properties: {
        "gothra": {
          name: 'gothra',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
