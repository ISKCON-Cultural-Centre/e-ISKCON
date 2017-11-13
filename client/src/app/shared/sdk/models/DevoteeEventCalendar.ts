/* tslint:disable */
import {
  Devotee,
  EventMaster
} from '../index';

declare var Object: any;
export interface DevoteeEventCalendarInterface {
  "devoteeId": string;
  "eventDate": Date;
  "eventMasterId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDevoteeEventCalendarDevotee2rel?: Devotee;
  fkDevoteeEventCalendarEventMaster1rel?: EventMaster;
}

export class DevoteeEventCalendar implements DevoteeEventCalendarInterface {
  "devoteeId": string;
  "eventDate": Date;
  "eventMasterId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkDevoteeEventCalendarDevotee2rel: Devotee;
  fkDevoteeEventCalendarEventMaster1rel: EventMaster;
  constructor(data?: DevoteeEventCalendarInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeEventCalendar`.
   */
  public static getModelName() {
    return "DevoteeEventCalendar";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeEventCalendar for dynamic purposes.
  **/
  public static factory(data: DevoteeEventCalendarInterface): DevoteeEventCalendar{
    return new DevoteeEventCalendar(data);
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
      name: 'DevoteeEventCalendar',
      plural: 'DevoteeEventCalendars',
      path: 'DevoteeEventCalendars',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "eventDate": {
          name: 'eventDate',
          type: 'Date'
        },
        "eventMasterId": {
          name: 'eventMasterId',
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
        fkDevoteeEventCalendarDevotee2rel: {
          name: 'fkDevoteeEventCalendarDevotee2rel',
          type: 'Devotee',
          model: 'Devotee'
        },
        fkDevoteeEventCalendarEventMaster1rel: {
          name: 'fkDevoteeEventCalendarEventMaster1rel',
          type: 'EventMaster',
          model: 'EventMaster'
        },
      }
    }
  }
}
