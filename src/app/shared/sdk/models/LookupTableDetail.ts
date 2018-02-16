/* tslint:disable */
import {
  LookupTableMaster
} from '../index';

declare var Object: any;
export interface LookupTableDetailInterface {
  "tableName": string;
  "columnName": string;
  "columnDisplayName": string;
  "columnDataType"?: string;
  "createdBy"?: string;
  "updatedBy"?: string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  fkLookupTableDetailLookupTableMaster1rel?: LookupTableMaster;
}

export class LookupTableDetail implements LookupTableDetailInterface {
  "tableName": string;
  "columnName": string;
  "columnDisplayName": string;
  "columnDataType": string;
  "createdBy": string;
  "updatedBy": string;
  "createdOn": Date;
  "updatedOn": Date;
  fkLookupTableDetailLookupTableMaster1rel: LookupTableMaster;
  constructor(data?: LookupTableDetailInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LookupTableDetail`.
   */
  public static getModelName() {
    return "LookupTableDetail";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LookupTableDetail for dynamic purposes.
  **/
  public static factory(data: LookupTableDetailInterface): LookupTableDetail{
    return new LookupTableDetail(data);
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
      name: 'LookupTableDetail',
      plural: 'LookupTableDetails',
      path: 'LookupTableDetails',
      idName: 'tableName',
      properties: {
        "tableName": {
          name: 'tableName',
          type: 'string'
        },
        "columnName": {
          name: 'columnName',
          type: 'string'
        },
        "columnDisplayName": {
          name: 'columnDisplayName',
          type: 'string'
        },
        "columnDataType": {
          name: 'columnDataType',
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
        fkLookupTableDetailLookupTableMaster1rel: {
          name: 'fkLookupTableDetailLookupTableMaster1rel',
          type: 'LookupTableMaster',
          model: 'LookupTableMaster',
          relationType: 'belongsTo',
                  keyFrom: 'tableName',
          keyTo: 'tableName'
        },
      }
    }
  }
}
