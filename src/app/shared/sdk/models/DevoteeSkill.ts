/* tslint:disable */
import {
  Devotee,
  Skill
} from '../index';

declare var Object: any;
export interface DevoteeSkillInterface {
  "devoteeId": string;
  "skillId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkDevoteeSkillDevotee1rel?: Devotee;
  fkDevoteeSkillSkill1rel?: Skill;
}

export class DevoteeSkill implements DevoteeSkillInterface {
  "devoteeId": string;
  "skillId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkDevoteeSkillDevotee1rel: Devotee;
  fkDevoteeSkillSkill1rel: Skill;
  constructor(data?: DevoteeSkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeSkill`.
   */
  public static getModelName() {
    return "DevoteeSkill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeSkill for dynamic purposes.
  **/
  public static factory(data: DevoteeSkillInterface): DevoteeSkill{
    return new DevoteeSkill(data);
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
      name: 'DevoteeSkill',
      plural: 'DevoteeSkills',
      path: 'DevoteeSkills',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "skillId": {
          name: 'skillId',
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
        fkDevoteeSkillDevotee1rel: {
          name: 'fkDevoteeSkillDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeSkillSkill1rel: {
          name: 'fkDevoteeSkillSkill1rel',
          type: 'Skill',
          model: 'Skill',
          relationType: 'belongsTo',
                  keyFrom: 'skillId',
          keyTo: 'id'
        },
      }
    }
  }
}
