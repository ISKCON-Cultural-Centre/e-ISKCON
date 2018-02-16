/* tslint:disable */

declare var Object: any;
export interface SkillCategoryInterface {
  "id"?: string;
  "skillCategoryName"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class SkillCategory implements SkillCategoryInterface {
  "id": string;
  "skillCategoryName": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: SkillCategoryInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `SkillCategory`.
   */
  public static getModelName() {
    return "SkillCategory";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of SkillCategory for dynamic purposes.
  **/
  public static factory(data: SkillCategoryInterface): SkillCategory{
    return new SkillCategory(data);
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
      name: 'SkillCategory',
      plural: 'SkillCategories',
      path: 'SkillCategories',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "skillCategoryName": {
          name: 'skillCategoryName',
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
