/* tslint:disable */

declare var Object: any;
export interface DepartmentRoleInterface {
  "departmentId": string;
  "roleId": number;
}

export class DepartmentRole implements DepartmentRoleInterface {
  "departmentId": string;
  "roleId": number;
  constructor(data?: DepartmentRoleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DepartmentRole`.
   */
  public static getModelName() {
    return "DepartmentRole";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DepartmentRole for dynamic purposes.
  **/
  public static factory(data: DepartmentRoleInterface): DepartmentRole{
    return new DepartmentRole(data);
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
      name: 'DepartmentRole',
      plural: 'DepartmentRoles',
      path: 'DepartmentRoles',
      idName: 'departmentId',
      properties: {
        "departmentId": {
          name: 'departmentId',
          type: 'string'
        },
        "roleId": {
          name: 'roleId',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
