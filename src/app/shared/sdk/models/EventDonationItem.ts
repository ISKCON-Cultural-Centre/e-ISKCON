/* tslint:disable */
import {
  DepartmentCalendar
} from '../index';

declare var Object: any;
export interface EventDonationItemInterface {
  "id": string;
  "eventDonationName": string;
  "departmentCalendarId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkEventDonationMasterDepartmentCalendar1rel?: DepartmentCalendar;
}

export class EventDonationItem implements EventDonationItemInterface {
  "id": string;
  "eventDonationName": string;
  "departmentCalendarId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkEventDonationMasterDepartmentCalendar1rel: DepartmentCalendar;
  constructor(data?: EventDonationItemInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EventDonationItem`.
   */
  public static getModelName() {
    return "EventDonationItem";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EventDonationItem for dynamic purposes.
  **/
  public static factory(data: EventDonationItemInterface): EventDonationItem{
    return new EventDonationItem(data);
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
      name: 'EventDonationItem',
      plural: 'EventDonationItems',
      path: 'EventDonationItems',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "eventDonationName": {
          name: 'eventDonationName',
          type: 'string'
        },
        "departmentCalendarId": {
          name: 'departmentCalendarId',
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
        fkEventDonationMasterDepartmentCalendar1rel: {
          name: 'fkEventDonationMasterDepartmentCalendar1rel',
          type: 'DepartmentCalendar',
          model: 'DepartmentCalendar',
          relationType: 'belongsTo',
                  keyFrom: 'departmentCalendarId',
          keyTo: 'id'
        },
      }
    }
  }
}
