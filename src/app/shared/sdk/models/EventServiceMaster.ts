/* tslint:disable */
import {
  EventMaster,
  ServiceArea
} from '../index';

declare var Object: any;
export interface EventServiceMasterInterface {
  "serviceAreaId": string;
  "eventMasterId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkEventServiceMasterEventMaster1rel?: EventMaster;
  fkEventServiceMasterServiceArea1rel?: ServiceArea;
}

export class EventServiceMaster implements EventServiceMasterInterface {
  "serviceAreaId": string;
  "eventMasterId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkEventServiceMasterEventMaster1rel: EventMaster;
  fkEventServiceMasterServiceArea1rel: ServiceArea;
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
      idName: 'serviceAreaId',
      properties: {
        "serviceAreaId": {
          name: 'serviceAreaId',
          type: 'string'
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
      },
      relations: {
        fkEventServiceMasterEventMaster1rel: {
          name: 'fkEventServiceMasterEventMaster1rel',
          type: 'EventMaster',
          model: 'EventMaster',
          relationType: 'belongsTo',
                  keyFrom: 'eventMasterId',
          keyTo: 'id'
        },
        fkEventServiceMasterServiceArea1rel: {
          name: 'fkEventServiceMasterServiceArea1rel',
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
