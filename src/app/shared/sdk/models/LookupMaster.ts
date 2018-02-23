/* tslint:disable */

declare var Object: any;
export interface LookupMasterInterface {
  "id"?: number;
}

export class LookupMaster implements LookupMasterInterface {
  "id": number;
  constructor(data?: LookupMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LookupMaster`.
   */
  public static getModelName() {
    return "LookupMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LookupMaster for dynamic purposes.
  **/
  public static factory(data: LookupMasterInterface): LookupMaster{
    return new LookupMaster(data);
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
      name: 'LookupMaster',
      plural: 'lookupMasters',
      path: 'lookupMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
