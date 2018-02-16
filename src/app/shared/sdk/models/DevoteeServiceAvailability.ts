/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeServiceAvailabilityInterface {
  "id"?: string;
  "devoteeId": string;
  "serviceDate": Date;
  "serviceHours": number;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDevoteeServiceAvailabilityDevotee1rel?: Devotee;
}

export class DevoteeServiceAvailability implements DevoteeServiceAvailabilityInterface {
  "id": string;
  "devoteeId": string;
  "serviceDate": Date;
  "serviceHours": number;
  "created-on": Date;
  "updated-on": Date;
  fkDevoteeServiceAvailabilityDevotee1rel: Devotee;
  constructor(data?: DevoteeServiceAvailabilityInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeServiceAvailability`.
   */
  public static getModelName() {
    return "DevoteeServiceAvailability";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeServiceAvailability for dynamic purposes.
  **/
  public static factory(data: DevoteeServiceAvailabilityInterface): DevoteeServiceAvailability{
    return new DevoteeServiceAvailability(data);
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
      name: 'DevoteeServiceAvailability',
      plural: 'DevoteeServiceAvailabilities',
      path: 'DevoteeServiceAvailabilities',
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
        "serviceDate": {
          name: 'serviceDate',
          type: 'Date'
        },
        "serviceHours": {
          name: 'serviceHours',
          type: 'number'
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
        fkDevoteeServiceAvailabilityDevotee1rel: {
          name: 'fkDevoteeServiceAvailabilityDevotee1rel',
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
