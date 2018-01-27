/* tslint:disable */
import {
  ServiceRoleMapping
} from '../index';

declare var Object: any;
export interface ServiceRoleInterface {
  "id": string;
  "name": string;
  "description"?: string;
  "created"?: Date;
  "modified"?: Date;
  "created-on"?: Date;
  "updated-on"?: Date;
  principals?: ServiceRoleMapping[];
}

export class ServiceRole implements ServiceRoleInterface {
  "id": string;
  "name": string;
  "description": string;
  "created": Date;
  "modified": Date;
  "created-on": Date;
  "updated-on": Date;
  principals: ServiceRoleMapping[];
  constructor(data?: ServiceRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceRole`.
   */
  public static getModelName() {
    return "ServiceRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceRole for dynamic purposes.
  **/
  public static factory(data: ServiceRoleInterface): ServiceRole{
    return new ServiceRole(data);
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
      name: 'ServiceRole',
      plural: 'ServiceRoles',
      path: 'ServiceRoles',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
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
        principals: {
          name: 'principals',
          type: 'ServiceRoleMapping[]',
          model: 'ServiceRoleMapping',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'roleId'
        },
      }
    }
  }
}
