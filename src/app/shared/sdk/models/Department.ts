/* tslint:disable */
import {
  Devotee,
  Temple,
  DepartmentCalendar,
  DepartmentAnnouncement
} from '../index';

declare var Object: any;
export interface DepartmentInterface {
  "id"?: string;
  "templeId": string;
  "departmentName": string;
  "departmentLeaderDevoteeId": string;
  "icon"?: string;
  "route"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDepartmentDevotee1rel?: Devotee;
  fkDepartmentTemple1rel?: Temple;
  events?: DepartmentCalendar[];
  announcements?: DepartmentAnnouncement[];
}

export class Department implements DepartmentInterface {
  "id": string;
  "templeId": string;
  "departmentName": string;
  "departmentLeaderDevoteeId": string;
  "icon": string;
  "route": string;
  "created-on": Date;
  "updated-on": Date;
  fkDepartmentDevotee1rel: Devotee;
  fkDepartmentTemple1rel: Temple;
  events: DepartmentCalendar[];
  announcements: DepartmentAnnouncement[];
  constructor(data?: DepartmentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Department`.
   */
  public static getModelName() {
    return "Department";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Department for dynamic purposes.
  **/
  public static factory(data: DepartmentInterface): Department{
    return new Department(data);
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
      name: 'Department',
      plural: 'Departments',
      path: 'Departments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "templeId": {
          name: 'templeId',
          type: 'string'
        },
        "departmentName": {
          name: 'departmentName',
          type: 'string'
        },
        "departmentLeaderDevoteeId": {
          name: 'departmentLeaderDevoteeId',
          type: 'string'
        },
        "icon": {
          name: 'icon',
          type: 'string'
        },
        "route": {
          name: 'route',
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
        fkDepartmentDevotee1rel: {
          name: 'fkDepartmentDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'departmentLeaderDevoteeId',
          keyTo: 'id'
        },
        fkDepartmentTemple1rel: {
          name: 'fkDepartmentTemple1rel',
          type: 'Temple',
          model: 'Temple',
          relationType: 'belongsTo',
                  keyFrom: 'templeId',
          keyTo: 'id'
        },
        events: {
          name: 'events',
          type: 'DepartmentCalendar[]',
          model: 'DepartmentCalendar',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'departmentId'
        },
        announcements: {
          name: 'announcements',
          type: 'DepartmentAnnouncement[]',
          model: 'DepartmentAnnouncement',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'departmentId'
        },
      }
    }
  }
}
