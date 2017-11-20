/* tslint:disable */
import {
  Service,
  TaskMaster
} from '../index';

declare var Object: any;
export interface ServiceTaskMasterInterface {
  "taskMasterId": string;
  "serviceId": string;
  fkServiceTaskMasterService1rel?: Service;
  fkRoleTaskMasterTaskMaster1rel?: TaskMaster;
}

export class ServiceTaskMaster implements ServiceTaskMasterInterface {
  "taskMasterId": string;
  "serviceId": string;
  fkServiceTaskMasterService1rel: Service;
  fkRoleTaskMasterTaskMaster1rel: TaskMaster;
  constructor(data?: ServiceTaskMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ServiceTaskMaster`.
   */
  public static getModelName() {
    return "ServiceTaskMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ServiceTaskMaster for dynamic purposes.
  **/
  public static factory(data: ServiceTaskMasterInterface): ServiceTaskMaster{
    return new ServiceTaskMaster(data);
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
      name: 'ServiceTaskMaster',
      plural: 'ServiceTaskMasters',
      path: 'ServiceTaskMasters',
      idName: 'taskMasterId',
      properties: {
        "taskMasterId": {
          name: 'taskMasterId',
          type: 'string'
        },
        "serviceId": {
          name: 'serviceId',
          type: 'string'
        },
      },
      relations: {
        fkServiceTaskMasterService1rel: {
          name: 'fkServiceTaskMasterService1rel',
          type: 'Service',
          model: 'Service',
          relationType: 'belongsTo',
                  keyFrom: 'serviceId',
          keyTo: 'id'
        },
        fkRoleTaskMasterTaskMaster1rel: {
          name: 'fkRoleTaskMasterTaskMaster1rel',
          type: 'TaskMaster',
          model: 'TaskMaster',
          relationType: 'belongsTo',
                  keyFrom: 'taskMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
