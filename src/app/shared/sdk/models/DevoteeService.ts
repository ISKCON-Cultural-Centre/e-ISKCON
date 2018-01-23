/* tslint:disable */
import {
  FestivalCalendar,
  ServiceArea
} from '../index';

declare var Object: any;
export interface DevoteeServiceInterface {
  "id"?: string;
  "festivalCalendarId": string;
  "serviceAreaId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDevoteeServiceFestivalCalendar1rel?: FestivalCalendar;
  fkDevoteeServiceServiceArea1rel?: ServiceArea;
}

export class DevoteeService implements DevoteeServiceInterface {
  "id": string;
  "festivalCalendarId": string;
  "serviceAreaId": string;
  "created-on": Date;
  "updated-on": Date;
  fkDevoteeServiceFestivalCalendar1rel: FestivalCalendar;
  fkDevoteeServiceServiceArea1rel: ServiceArea;
  constructor(data?: DevoteeServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeService`.
   */
  public static getModelName() {
    return "DevoteeService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeService for dynamic purposes.
  **/
  public static factory(data: DevoteeServiceInterface): DevoteeService{
    return new DevoteeService(data);
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
      name: 'DevoteeService',
      plural: 'DevoteeServices',
      path: 'DevoteeServices',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "festivalCalendarId": {
          name: 'festivalCalendarId',
          type: 'string'
        },
        "serviceAreaId": {
          name: 'serviceAreaId',
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
        fkDevoteeServiceFestivalCalendar1rel: {
          name: 'fkDevoteeServiceFestivalCalendar1rel',
          type: 'FestivalCalendar',
          model: 'FestivalCalendar',
          relationType: 'belongsTo',
                  keyFrom: 'festivalCalendarId',
          keyTo: 'id'
        },
        fkDevoteeServiceServiceArea1rel: {
          name: 'fkDevoteeServiceServiceArea1rel',
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
