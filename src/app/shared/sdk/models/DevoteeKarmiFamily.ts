/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeKarmiFamilyInterface {
  "familyName"?: string;
  "devoteeId": string;
  "relatedDevoteeId": string;
  "relationshipId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkDevoteeKarmiFamilyDevotee1rel?: Devotee;
  fkDevoteeKarmiFamilyDevotee2rel?: Devotee;
  fkDevoteeKarmiFamilyRelationshipMaster1rel?: any;
}

export class DevoteeKarmiFamily implements DevoteeKarmiFamilyInterface {
  "familyName": string;
  "devoteeId": string;
  "relatedDevoteeId": string;
  "relationshipId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkDevoteeKarmiFamilyDevotee1rel: Devotee;
  fkDevoteeKarmiFamilyDevotee2rel: Devotee;
  fkDevoteeKarmiFamilyRelationshipMaster1rel: any;
  constructor(data?: DevoteeKarmiFamilyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeKarmiFamily`.
   */
  public static getModelName() {
    return "DevoteeKarmiFamily";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeKarmiFamily for dynamic purposes.
  **/
  public static factory(data: DevoteeKarmiFamilyInterface): DevoteeKarmiFamily{
    return new DevoteeKarmiFamily(data);
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
      name: 'DevoteeKarmiFamily',
      plural: 'DevoteeKarmiFamilies',
      path: 'DevoteeKarmiFamilies',
      idName: 'devoteeId',
      properties: {
        "familyName": {
          name: 'familyName',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "relatedDevoteeId": {
          name: 'relatedDevoteeId',
          type: 'string'
        },
        "relationshipId": {
          name: 'relationshipId',
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
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
          type: 'string'
        },
      },
      relations: {
        fkDevoteeKarmiFamilyDevotee1rel: {
          name: 'fkDevoteeKarmiFamilyDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'relatedDevoteeId',
          keyTo: 'id'
        },
        fkDevoteeKarmiFamilyDevotee2rel: {
          name: 'fkDevoteeKarmiFamilyDevotee2rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeKarmiFamilyRelationshipMaster1rel: {
          name: 'fkDevoteeKarmiFamilyRelationshipMaster1rel',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'relationshipId',
          keyTo: 'id'
        },
      }
    }
  }
}
