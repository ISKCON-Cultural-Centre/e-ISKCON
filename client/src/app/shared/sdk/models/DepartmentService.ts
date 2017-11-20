/* tslint:disable */
import {
  Department,
  Service
} from '../index';

declare var Object: any;
export interface DepartmentServiceInterface {
  "departmentId": string;
  "serviceId": string;
  fkDepartmentRoleDepartment1rel?: Department;
  fkDepartmentRoleService1rel?: Service;
}

export class DepartmentService implements DepartmentServiceInterface {
  "departmentId": string;
  "serviceId": string;
  fkDepartmentRoleDepartment1rel: Department;
  fkDepartmentRoleService1rel: Service;
  constructor(data?: DepartmentServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DepartmentService`.
   */
  public static getModelName() {
    return "DepartmentService";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DepartmentService for dynamic purposes.
  **/
  public static factory(data: DepartmentServiceInterface): DepartmentService{
    return new DepartmentService(data);
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
      name: 'DepartmentService',
      plural: 'DepartmentServices',
      path: 'DepartmentServices',
      idName: 'departmentId',
      properties: {
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "serviceId": {
          name: 'serviceId',
          type: 'string'
        },
      },
      relations: {
        fkDepartmentRoleDepartment1rel: {
          name: 'fkDepartmentRoleDepartment1rel',
          type: 'Department',
          model: 'Department',
          relationType: 'belongsTo',
                  keyFrom: 'departmentId',
          keyTo: 'id'
        },
        fkDepartmentRoleService1rel: {
          name: 'fkDepartmentRoleService1rel',
          type: 'Service',
          model: 'Service',
          relationType: 'belongsTo',
                  keyFrom: 'serviceId',
          keyTo: 'id'
        },
      }
    }
  }
}
