/* tslint:disable */
import {
  Devotee,
  RelationshipMaster
} from '../index';

declare var Object: any;
export interface DevoteeKarmiFamilyInterface {
  "id": string;
  "familyName": string;
  "relationshipId": string;
  "devoteeId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDevoteeKarmiFamilyDevotee2rel?: Devotee;
  fkDevoteeKarmiFamilyRelationshipMaster1rel?: RelationshipMaster;
}

export class DevoteeKarmiFamily implements DevoteeKarmiFamilyInterface {
  "id": string;
  "familyName": string;
  "relationshipId": string;
  "devoteeId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkDevoteeKarmiFamilyDevotee2rel: Devotee;
  fkDevoteeKarmiFamilyRelationshipMaster1rel: RelationshipMaster;
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
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "familyName": {
          name: 'familyName',
          type: 'string'
        },
        "relationshipId": {
          name: 'relationshipId',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
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
          type: 'RelationshipMaster',
          model: 'RelationshipMaster',
          relationType: 'belongsTo',
                  keyFrom: 'relationshipId',
          keyTo: 'id'
        },
      }
    }
  }
}
