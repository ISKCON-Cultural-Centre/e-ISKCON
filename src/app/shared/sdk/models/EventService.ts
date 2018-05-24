/* tslint:disable */
import {
  DepartmentEvent,
  ServiceArea
} from '../index';

declare var Object: any;
export interface EventServiceInterface {
  "departmentEventId": string;
  "serviceAreaId": string;
  "serviceQty": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkEventServiceDepartmentEvent1rel?: DepartmentEvent;
  fkEventServiceServiceArea1rel?: ServiceArea;
}

export class EventService implements EventServiceInterface {
  "departmentEventId": string;
  "serviceAreaId": string;
  "serviceQty": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkEventServiceDepartmentEvent1rel: DepartmentEvent;
  fkEventServiceServiceArea1rel: ServiceArea;
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
      idName: 'departmentEventId',
      properties: {
        "departmentEventId": {
          name: 'departmentEventId',
          type: 'string'
        },
        "serviceAreaId": {
          name: 'serviceAreaId',
          type: 'string'
        },
        "serviceQty": {
          name: 'serviceQty',
          type: 'number'
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
        fkEventServiceDepartmentEvent1rel: {
          name: 'fkEventServiceDepartmentEvent1rel',
          type: 'DepartmentEvent',
          model: 'DepartmentEvent',
          relationType: 'belongsTo',
                  keyFrom: 'departmentEventId',
          keyTo: 'id'
        },
        fkEventServiceServiceArea1rel: {
          name: 'fkEventServiceServiceArea1rel',
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
