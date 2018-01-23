/* tslint:disable */
import {
  SkillCategory
} from '../index';

declare var Object: any;
export interface SkillInterface {
  "id"?: string;
  "skillName": string;
  "skillCategoryId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkSkillSkillCategory1rel?: SkillCategory;
}

export class Skill implements SkillInterface {
  "id": string;
  "skillName": string;
  "skillCategoryId": string;
  "created-on": Date;
  "updated-on": Date;
  fkSkillSkillCategory1rel: SkillCategory;
  constructor(data?: SkillInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Skill`.
   */
  public static getModelName() {
    return "Skill";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Skill for dynamic purposes.
  **/
  public static factory(data: SkillInterface): Skill{
    return new Skill(data);
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
      name: 'Skill',
      plural: 'Skills',
      path: 'Skills',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "skillName": {
          name: 'skillName',
          type: 'string'
        },
        "skillCategoryId": {
          name: 'skillCategoryId',
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
        fkSkillSkillCategory1rel: {
          name: 'fkSkillSkillCategory1rel',
          type: 'SkillCategory',
          model: 'SkillCategory',
          relationType: 'belongsTo',
                  keyFrom: 'skillCategoryId',
          keyTo: 'id'
        },
      }
    }
  }
}
