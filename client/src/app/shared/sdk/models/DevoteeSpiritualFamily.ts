/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeSpiritualFamilyInterface {
  "id": string;
  "devoteeId": string;
  "guidingDevoteeId": string;
  fkDevoteeSpiritualFamilyDevotee1rel?: Devotee;
  fkDevoteeSpiritualFamilyDevotee2rel?: Devotee;
}

export class DevoteeSpiritualFamily implements DevoteeSpiritualFamilyInterface {
  "id": string;
  "devoteeId": string;
  "guidingDevoteeId": string;
  fkDevoteeSpiritualFamilyDevotee1rel: Devotee;
  fkDevoteeSpiritualFamilyDevotee2rel: Devotee;
  constructor(data?: DevoteeSpiritualFamilyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeSpiritualFamily`.
   */
  public static getModelName() {
    return "DevoteeSpiritualFamily";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeSpiritualFamily for dynamic purposes.
  **/
  public static factory(data: DevoteeSpiritualFamilyInterface): DevoteeSpiritualFamily{
    return new DevoteeSpiritualFamily(data);
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
      name: 'DevoteeSpiritualFamily',
      plural: 'DevoteeSpiritualFamilies',
      path: 'DevoteeSpiritualFamilies',
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
        "guidingDevoteeId": {
          name: 'guidingDevoteeId',
          type: 'string'
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
        fkDevoteeSpiritualFamilyDevotee2rel: {
          name: 'fkDevoteeSpiritualFamilyDevotee2rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'guidingDevoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
