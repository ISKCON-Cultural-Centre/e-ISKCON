/* tslint:disable */
import {
  TaskMaster
} from '../index';

declare var Object: any;
export interface RoleTaskMasterInterface {
  "taskMasterId1": string;
  "rolesId": string;
  "id"?: number;
  fkRoleTaskMasterTaskMaster1rel?: TaskMaster;
}

export class RoleTaskMaster implements RoleTaskMasterInterface {
  "taskMasterId1": string;
  "rolesId": string;
  "id": number;
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
      idName: 'id',
      properties: {
        "taskMasterId1": {
          name: 'taskMasterId1',
          type: 'string'
        },
        "rolesId": {
          name: 'rolesId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
        fkRoleTaskMasterTaskMaster1rel: {
          name: 'fkRoleTaskMasterTaskMaster1rel',
          type: 'TaskMaster',
          model: 'TaskMaster',
          relationType: 'belongsTo',
                  keyFrom: 'taskMasterId1',
          keyTo: 'id'
        },
      }
    }
  }
}
