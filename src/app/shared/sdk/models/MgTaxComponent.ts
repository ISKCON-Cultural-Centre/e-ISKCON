/* tslint:disable */

declare var Object: any;
export interface MgTaxComponentInterface {
  "id"?: string;
  "taxComponentName": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgTaxComponent implements MgTaxComponentInterface {
  "id": string;
  "taxComponentName": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgTaxComponentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgTaxComponent`.
   */
  public static getModelName() {
    return "MgTaxComponent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgTaxComponent for dynamic purposes.
  **/
  public static factory(data: MgTaxComponentInterface): MgTaxComponent{
    return new MgTaxComponent(data);
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
      name: 'MgTaxComponent',
      plural: 'MgTaxComponents',
      path: 'MgTaxComponents',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "taxComponentName": {
          name: 'taxComponentName',
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
