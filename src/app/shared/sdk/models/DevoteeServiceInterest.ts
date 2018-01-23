/* tslint:disable */
import {
  Devotee,
  ServiceArea
} from '../index';

declare var Object: any;
export interface DevoteeServiceInterestInterface {
  "devoteeId": string;
  "serviceAreaId": string;
  fkDevoteeServiceInterestDevotee1rel?: Devotee;
  fkDevoteeServiceInterestServiceArea1rel?: ServiceArea;
}

export class DevoteeServiceInterest implements DevoteeServiceInterestInterface {
  "devoteeId": string;
  "serviceAreaId": string;
  fkDevoteeServiceInterestDevotee1rel: Devotee;
  fkDevoteeServiceInterestServiceArea1rel: ServiceArea;
  constructor(data?: DevoteeServiceInterestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeServiceInterest`.
   */
  public static getModelName() {
    return "DevoteeServiceInterest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeServiceInterest for dynamic purposes.
  **/
  public static factory(data: DevoteeServiceInterestInterface): DevoteeServiceInterest{
    return new DevoteeServiceInterest(data);
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
      name: 'DevoteeServiceInterest',
      plural: 'DevoteeServiceInterests',
      path: 'DevoteeServiceInterests',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "serviceAreaId": {
          name: 'serviceAreaId',
          type: 'string'
        },
      },
      relations: {
        fkDevoteeServiceInterestDevotee1rel: {
          name: 'fkDevoteeServiceInterestDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteeServiceInterestServiceArea1rel: {
          name: 'fkDevoteeServiceInterestServiceArea1rel',
          type: 'ServiceArea',
          model: 'ServiceArea',
          relationType: 'belongsTo',
                  keyFrom: 'serviceAreaId',
          keyTo: 'id'
        },
      }
    }
  }
}
