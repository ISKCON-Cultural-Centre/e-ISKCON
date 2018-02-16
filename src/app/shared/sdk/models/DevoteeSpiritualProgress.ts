/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeSpiritualProgressInterface {
  "id"?: string;
  "devoteeId"?: string;
  "levelDate": Date;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "spiritualLevelMasterId": string;
  "guruId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDevoteeSpiritualFamilyDevotee1rel?: Devotee;
  fkDevoteeSpiritualFamilySpiritualLevelMaster1rel?: any;
}

export class DevoteeSpiritualProgress implements DevoteeSpiritualProgressInterface {
  "id": string;
  "devoteeId": string;
  "levelDate": Date;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "spiritualLevelMasterId": string;
  "guruId": string;
  "created-on": Date;
  "updated-on": Date;
  fkDevoteeSpiritualFamilyDevotee1rel: Devotee;
  fkDevoteeSpiritualFamilySpiritualLevelMaster1rel: any;
  constructor(data?: DevoteeSpiritualProgressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeSpiritualProgress`.
   */
  public static getModelName() {
    return "DevoteeSpiritualProgress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeSpiritualProgress for dynamic purposes.
  **/
  public static factory(data: DevoteeSpiritualProgressInterface): DevoteeSpiritualProgress{
    return new DevoteeSpiritualProgress(data);
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
      name: 'DevoteeSpiritualProgress',
      plural: 'DevoteeSpiritualProgresses',
      path: 'DevoteeSpiritualProgresses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "levelDate": {
          name: 'levelDate',
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
        "spiritualLevelMasterId": {
          name: 'spiritualLevelMasterId',
          type: 'string'
        },
        "guruId": {
          name: 'guruId',
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
        fkDevoteeSpiritualFamilyDevotee1rel: {
          name: 'fkDevoteeSpiritualFamilyDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeSpiritualFamilySpiritualLevelMaster1rel: {
          name: 'fkDevoteeSpiritualFamilySpiritualLevelMaster1rel',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'spiritualLevelMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
