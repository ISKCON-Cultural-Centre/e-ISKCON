/* tslint:disable */

declare var Object: any;
export interface LookupTableMasterInterface {
  "tableName": string;
  "tableDisplayName": string;
  "createdBy"?: string;
  "updatedBy"?: string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
}

export class LookupTableMaster implements LookupTableMasterInterface {
  "tableName": string;
  "tableDisplayName": string;
  "createdBy": string;
  "updatedBy": string;
  "createdOn": Date;
  "updatedOn": Date;
  constructor(data?: LookupTableMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LookupTableMaster`.
   */
  public static getModelName() {
    return "LookupTableMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LookupTableMaster for dynamic purposes.
  **/
  public static factory(data: LookupTableMasterInterface): LookupTableMaster{
    return new LookupTableMaster(data);
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
      name: 'LookupTableMaster',
      plural: 'LookupTableMasters',
      path: 'LookupTableMasters',
      idName: 'tableName',
      properties: {
        "tableName": {
          name: 'tableName',
          type: 'string'
        },
        "tableDisplayName": {
          name: 'tableDisplayName',
          type: 'string'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
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
      },
      relations: {
      }
    }
  }
}
