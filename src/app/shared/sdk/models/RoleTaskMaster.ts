/* tslint:disable */
import {
  ServiceRole,
  TaskMaster
} from '../index';

declare var Object: any;
export interface RoleTaskMasterInterface {
  "taskMasterId": string;
  "roleId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkServiceTaskMasterService1rel?: ServiceRole;
  fkRoleTaskMasterTaskMaster1rel?: TaskMaster;
}

export class RoleTaskMaster implements RoleTaskMasterInterface {
  "taskMasterId": string;
  "roleId": string;
  "created-on": Date;
  "updated-on": Date;
  fkServiceTaskMasterService1rel: ServiceRole;
  fkRoleTaskMasterTaskMaster1rel: TaskMaster;
  constructor(data?: RoleTaskMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `RoleTaskMaster`.
   */
  public static getModelName() {
    return "RoleTaskMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of RoleTaskMaster for dynamic purposes.
  **/
  public static factory(data: RoleTaskMasterInterface): RoleTaskMaster{
    return new RoleTaskMaster(data);
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
      name: 'RoleTaskMaster',
      plural: 'RoleTaskMasters',
      path: 'RoleTaskMasters',
      idName: 'taskMasterId',
      properties: {
        "taskMasterId": {
          name: 'taskMasterId',
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
        fkServiceTaskMasterService1rel: {
          name: 'fkServiceTaskMasterService1rel',
          type: 'ServiceRole',
          model: 'ServiceRole',
          relationType: 'belongsTo',
                  keyFrom: 'roleId',
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
