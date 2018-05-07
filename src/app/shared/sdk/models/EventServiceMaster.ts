/* tslint:disable */

declare var Object: any;
export interface EventServiceMasterInterface {
  "eventMasterId": string;
  "serviceAreaId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class EventServiceMaster implements EventServiceMasterInterface {
  "eventMasterId": string;
  "serviceAreaId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: EventServiceMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EventServiceMaster`.
   */
  public static getModelName() {
    return "EventServiceMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EventServiceMaster for dynamic purposes.
  **/
  public static factory(data: EventServiceMasterInterface): EventServiceMaster{
    return new EventServiceMaster(data);
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
      name: 'EventServiceMaster',
      plural: 'EventServiceMasters',
      path: 'EventServiceMasters',
      idName: 'eventMasterId',
      properties: {
        "eventMasterId": {
          name: 'eventMasterId',
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
