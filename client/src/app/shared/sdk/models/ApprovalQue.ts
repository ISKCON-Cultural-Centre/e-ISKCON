/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface ApprovalQueInterface {
  "id": string;
  "approverId": string;
  "artefactInstanceId": string;
  "requestingDevoteeId": string;
  "approvalSequenceNo": number;
  "lastApproverInd": number;
  "approvalInd"?: number;
  "activatedInd": number;
  "approverRemarks"?: string;
  fkApprovalQueDevotee1rel?: Devotee;
  fkApprovalQueDevotee3rel?: Devotee;
}

export class ApprovalQue implements ApprovalQueInterface {
  "id": string;
  "approverId": string;
  "artefactInstanceId": string;
  "requestingDevoteeId": string;
  "approvalSequenceNo": number;
  "lastApproverInd": number;
  "approvalInd": number;
  "activatedInd": number;
  "approverRemarks": string;
  fkApprovalQueDevotee1rel: Devotee;
  fkApprovalQueDevotee3rel: Devotee;
  constructor(data?: ApprovalQueInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApprovalQue`.
   */
  public static getModelName() {
    return "ApprovalQue";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApprovalQue for dynamic purposes.
  **/
  public static factory(data: ApprovalQueInterface): ApprovalQue{
    return new ApprovalQue(data);
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
      name: 'ApprovalQue',
      plural: 'ApprovalQues',
      path: 'ApprovalQues',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "approverId": {
          name: 'approverId',
          type: 'string'
        },
        "artefactInstanceId": {
          name: 'artefactInstanceId',
          type: 'string'
        },
        "requestingDevoteeId": {
          name: 'requestingDevoteeId',
          type: 'string'
        },
        "approvalSequenceNo": {
          name: 'approvalSequenceNo',
          type: 'number'
        },
        "lastApproverInd": {
          name: 'lastApproverInd',
          type: 'number'
        },
        "approvalInd": {
          name: 'approvalInd',
          type: 'number'
        },
        "activatedInd": {
          name: 'activatedInd',
          type: 'number'
        },
        "approverRemarks": {
          name: 'approverRemarks',
          type: 'string'
        },
      },
      relations: {
        fkApprovalQueDevotee1rel: {
          name: 'fkApprovalQueDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'approverId',
          keyTo: 'id'
        },
        fkApprovalQueDevotee3rel: {
          name: 'fkApprovalQueDevotee3rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'requestingDevoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
