/* tslint:disable */
import {
  Department
} from '../index';

declare var Object: any;
export interface DepartmentCalendarInterface {
  "id": string;
  "departmentId": string;
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
  fkDepartmentCalendarDepartment1rel?: Department;
}

export class DepartmentCalendar implements DepartmentCalendarInterface {
  "id": string;
  "departmentId": string;
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
  fkDepartmentCalendarDepartment1rel: Department;
  constructor(data?: DepartmentCalendarInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DepartmentCalendar`.
   */
  public static getModelName() {
    return "DepartmentCalendar";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DepartmentCalendar for dynamic purposes.
  **/
  public static factory(data: DepartmentCalendarInterface): DepartmentCalendar{
    return new DepartmentCalendar(data);
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
      name: 'DepartmentCalendar',
      plural: 'DepartmentCalendars',
      path: 'DepartmentCalendars',
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
        fkDepartmentCalendarDepartment1rel: {
          name: 'fkDepartmentCalendarDepartment1rel',
          type: 'Department',
          model: 'Department',
          relationType: 'belongsTo',
                  keyFrom: 'departmentId',
          keyTo: 'id'
        },
      }
    }
  }
}
