/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeGroupingInterface {
  "devoteeId": string;
  "groupId": string;
  fkDevoteeGroupingDevotee1rel?: Devotee;
}

export class DevoteeGrouping implements DevoteeGroupingInterface {
  "devoteeId": string;
  "groupId": string;
  fkDevoteeGroupingDevotee1rel: Devotee;
  constructor(data?: DevoteeGroupingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeGrouping`.
   */
  public static getModelName() {
    return "DevoteeGrouping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeGrouping for dynamic purposes.
  **/
  public static factory(data: DevoteeGroupingInterface): DevoteeGrouping{
    return new DevoteeGrouping(data);
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
      name: 'DevoteeGrouping',
      plural: 'DevoteeGroupings',
      path: 'DevoteeGroupings',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "groupId": {
          name: 'groupId',
          type: 'string'
        },
      },
      relations: {
        fkDevoteeGroupingDevotee1rel: {
          name: 'fkDevoteeGroupingDevotee1rel',
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
