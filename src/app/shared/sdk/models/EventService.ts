/* tslint:disable */

declare var Object: any;
export interface EventServiceInterface {
  "id": string;
  "departmentCalendarId": string;
  "serviceAreaId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class EventService implements EventServiceInterface {
  "id": string;
  "departmentCalendarId": string;
  "serviceAreaId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: EventServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EventService`.
   */
  public static getModelName() {
    return "EventService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EventService for dynamic purposes.
  **/
  public static factory(data: EventServiceInterface): EventService{
    return new EventService(data);
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
      name: 'EventService',
      plural: 'EventServices',
      path: 'EventServices',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "departmentCalendarId": {
          name: 'departmentCalendarId',
          type: 'string'
        },
        "serviceAreaId": {
          name: 'serviceAreaId',
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
      }
    }
  }
}
