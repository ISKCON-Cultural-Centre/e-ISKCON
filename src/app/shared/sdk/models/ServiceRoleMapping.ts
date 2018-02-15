/* tslint:disable */
import {
  ServiceRole
} from '../index';

declare var Object: any;
export interface ServiceRoleMappingInterface {
  "id": string;
  "principalType"?: string;
  "principalId"?: string;
  "roleId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkServiceMappingService1rel?: ServiceRole;
}

export class ServiceRoleMapping implements ServiceRoleMappingInterface {
  "id": string;
  "principalType": string;
  "principalId": string;
  "roleId": string;
  "created-on": Date;
  "updated-on": Date;
  fkServiceMappingService1rel: ServiceRole;
  constructor(data?: ServiceRoleMappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceRoleMapping`.
   */
  public static getModelName() {
    return "ServiceRoleMapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceRoleMapping for dynamic purposes.
  **/
  public static factory(data: ServiceRoleMappingInterface): ServiceRoleMapping{
    return new ServiceRoleMapping(data);
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
      name: 'ServiceRoleMapping',
      plural: 'ServiceRoleMappings',
      path: 'ServiceRoleMappings',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "principalType": {
          name: 'principalType',
          type: 'string'
        },
        "principalId": {
          name: 'principalId',
          type: 'string'
        },
        "roleId": {
          name: 'roleId',
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
        fkServiceMappingService1rel: {
          name: 'fkServiceMappingService1rel',
          type: 'ServiceRole',
          model: 'ServiceRole',
          relationType: 'belongsTo',
                  keyFrom: 'roleId',
          keyTo: 'id'
        },
      }
    }
  }
}
