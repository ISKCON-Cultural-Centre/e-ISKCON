/* tslint:disable */
import {
  Department
} from '../index';

declare var Object: any;
export interface DepartmentAnnouncementInterface {
  "id": string;
  "departmentId": string;
  "subject": string;
  "message": string;
  "validUntil": Date;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDepartmentAnnouncementDepartment1rel?: Department;
}

export class DepartmentAnnouncement implements DepartmentAnnouncementInterface {
  "id": string;
  "departmentId": string;
  "subject": string;
  "message": string;
  "validUntil": Date;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkDepartmentAnnouncementDepartment1rel: Department;
  constructor(data?: DepartmentAnnouncementInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DepartmentAnnouncement`.
   */
  public static getModelName() {
    return "DepartmentAnnouncement";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DepartmentAnnouncement for dynamic purposes.
  **/
  public static factory(data: DepartmentAnnouncementInterface): DepartmentAnnouncement{
    return new DepartmentAnnouncement(data);
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
      name: 'DepartmentAnnouncement',
      plural: 'DepartmentAnnouncements',
      path: 'DepartmentAnnouncements',
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
        "subject": {
          name: 'subject',
          type: 'string'
        },
        "message": {
          name: 'message',
          type: 'string'
        },
        "validUntil": {
          name: 'validUntil',
          type: 'Date'
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
        fkDepartmentAnnouncementDepartment1rel: {
          name: 'fkDepartmentAnnouncementDepartment1rel',
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
