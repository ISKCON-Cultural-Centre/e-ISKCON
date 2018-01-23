/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface MgOrderReturnInterface {
  "id"?: string;
  "date": Date;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "devoteeId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkTable1Devotee1rel?: Devotee;
}

export class MgOrderReturn implements MgOrderReturnInterface {
  "id": string;
  "date": Date;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "devoteeId": string;
  "created-on": Date;
  "updated-on": Date;
  fkTable1Devotee1rel: Devotee;
  constructor(data?: MgOrderReturnInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrderReturn`.
   */
  public static getModelName() {
    return "MgOrderReturn";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrderReturn for dynamic purposes.
  **/
  public static factory(data: MgOrderReturnInterface): MgOrderReturn{
    return new MgOrderReturn(data);
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
      name: 'MgOrderReturn',
      plural: 'MgOrderReturns',
      path: 'MgOrderReturns',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
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
        "devoteeId": {
          name: 'devoteeId',
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
        fkTable1Devotee1rel: {
          name: 'fkTable1Devotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
