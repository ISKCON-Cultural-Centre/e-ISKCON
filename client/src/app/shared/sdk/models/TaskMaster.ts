/* tslint:disable */

declare var Object: any;
export interface TaskMasterInterface {
  "id": string;
  "taskName": string;
  "applicationRoute": string;
  "taskDescription"?: string;
  "approvalRulesApplyInd": number;
}

export class TaskMaster implements TaskMasterInterface {
  "id": string;
  "taskName": string;
  "applicationRoute": string;
  "taskDescription": string;
  "approvalRulesApplyInd": number;
  constructor(data?: TaskMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TaskMaster`.
   */
  public static getModelName() {
    return "TaskMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TaskMaster for dynamic purposes.
  **/
  public static factory(data: TaskMasterInterface): TaskMaster{
    return new TaskMaster(data);
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
      name: 'TaskMaster',
      plural: 'TaskMasters',
      path: 'TaskMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "taskName": {
          name: 'taskName',
          type: 'string'
        },
        "applicationRoute": {
          name: 'applicationRoute',
          type: 'string'
        },
        "taskDescription": {
          name: 'taskDescription',
          type: 'string'
        },
        "approvalRulesApplyInd": {
          name: 'approvalRulesApplyInd',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
