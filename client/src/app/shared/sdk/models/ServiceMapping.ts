/* tslint:disable */
import {
  Service
} from '../index';

declare var Object: any;
export interface ServiceMappingInterface {
  "id": string;
  "principalType"?: string;
  "principalId"?: string;
  "roleId": string;
  fkServiceMappingService1rel?: Service;
  roleId?: Service;
}

export class ServiceMapping implements ServiceMappingInterface {
  "id": string;
  "principalType": string;
  "principalId": string;
  "roleId": string;
  fkServiceMappingService1rel: Service;
  roleId: Service;
  constructor(data?: ServiceMappingInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceMapping`.
   */
  public static getModelName() {
    return "ServiceMapping";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceMapping for dynamic purposes.
  **/
  public static factory(data: ServiceMappingInterface): ServiceMapping{
    return new ServiceMapping(data);
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
      name: 'ServiceMapping',
      plural: 'ServiceMappings',
      path: 'ServiceMappings',
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
      },
      relations: {
        fkServiceMappingService1rel: {
          name: 'fkServiceMappingService1rel',
          type: 'Service',
          model: 'Service',
          relationType: 'belongsTo',
                  keyFrom: 'roleId',
          keyTo: 'id'
        },
        roleId: {
          name: 'roleId',
          type: 'Service',
          model: 'Service',
          relationType: 'belongsTo',
                  keyFrom: 'id',
          keyTo: 'id'
        },
      }
    }
  }
}
