/* tslint:disable */

declare var Object: any;
export interface ApprovalRuleInterface {
  "id": string;
  "approvalArtefactId": string;
  "sequenceNo": number;
  "roleId": number;
  "lastApprovalSequenceInd": number;
}

export class ApprovalRule implements ApprovalRuleInterface {
  "id": string;
  "approvalArtefactId": string;
  "sequenceNo": number;
  "roleId": number;
  "lastApprovalSequenceInd": number;
  constructor(data?: ApprovalRuleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApprovalRule`.
   */
  public static getModelName() {
    return "ApprovalRule";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApprovalRule for dynamic purposes.
  **/
  public static factory(data: ApprovalRuleInterface): ApprovalRule{
    return new ApprovalRule(data);
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
      name: 'ApprovalRule',
      plural: 'ApprovalRules',
      path: 'ApprovalRules',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "approvalArtefactId": {
          name: 'approvalArtefactId',
          type: 'string'
        },
        "sequenceNo": {
          name: 'sequenceNo',
          type: 'number'
        },
        "roleId": {
          name: 'roleId',
          type: 'number'
        },
        "lastApprovalSequenceInd": {
          name: 'lastApprovalSequenceInd',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
