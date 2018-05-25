/* tslint:disable */
import {
  Department,
  EventMaster
} from '../index';

declare var Object: any;
export interface DepartmentEventInterface {
  "id": string;
  "departmentId": string;
  "eventMasterId"?: string;
  "eventName": string;
  "eventDescription"?: string;
  "startTime": Date;
  "endTime"?: Date;
  "allDayInd": number;
  "publicInd": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDepartmentCalendarDepartmentrel?: Department;
  fkDepartmentEventEventMaster1rel?: EventMaster;
}

export class DepartmentEvent implements DepartmentEventInterface {
  "id": string;
  "departmentId": string;
  "eventMasterId": string;
  "eventName": string;
  "eventDescription": string;
  "startTime": Date;
  "endTime": Date;
  "allDayInd": number;
  "publicInd": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkDepartmentCalendarDepartmentrel: Department;
  fkDepartmentEventEventMaster1rel: EventMaster;
  constructor(data?: DepartmentEventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DepartmentEvent`.
   */
  public static getModelName() {
    return "DepartmentEvent";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DepartmentEvent for dynamic purposes.
  **/
  public static factory(data: DepartmentEventInterface): DepartmentEvent{
    return new DepartmentEvent(data);
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
      name: 'DepartmentEvent',
      plural: 'DepartmentEvents',
      path: 'DepartmentEvents',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "eventMasterId": {
          name: 'eventMasterId',
          type: 'string'
        },
        "eventName": {
          name: 'eventName',
          type: 'string'
        },
        "eventDescription": {
          name: 'eventDescription',
          type: 'string'
        },
        "startTime": {
          name: 'startTime',
          type: 'Date'
        },
        "endTime": {
          name: 'endTime',
          type: 'Date'
        },
        "allDayInd": {
          name: 'allDayInd',
          type: 'number'
        },
        "publicInd": {
          name: 'publicInd',
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
        fkDepartmentCalendarDepartmentrel: {
          name: 'fkDepartmentCalendarDepartmentrel',
          type: 'Department',
          model: 'Department',
          relationType: 'belongsTo',
                  keyFrom: 'departmentId',
          keyTo: 'id'
        },
        fkDepartmentEventEventMaster1rel: {
          name: 'fkDepartmentEventEventMaster1rel',
          type: 'EventMaster',
          model: 'EventMaster',
          relationType: 'belongsTo',
                  keyFrom: 'eventMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
