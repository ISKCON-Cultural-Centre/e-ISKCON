/* tslint:disable */

declare var Object: any;
export interface ApprovalArtefactInterface {
  "id": string;
  "artefactName"?: string;
  "description": string;
  "approvalAfterActionMessage": string;
  "rejectionAfterActionMessage": string;
  "approvalArtefactEntityName": string;
}

export class ApprovalArtefact implements ApprovalArtefactInterface {
  "id": string;
  "artefactName": string;
  "description": string;
  "approvalAfterActionMessage": string;
  "rejectionAfterActionMessage": string;
  "approvalArtefactEntityName": string;
  constructor(data?: ApprovalArtefactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ApprovalArtefact`.
   */
  public static getModelName() {
    return "ApprovalArtefact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ApprovalArtefact for dynamic purposes.
  **/
  public static factory(data: ApprovalArtefactInterface): ApprovalArtefact{
    return new ApprovalArtefact(data);
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
      name: 'ApprovalArtefact',
      plural: 'ApprovalArtefacts',
      path: 'ApprovalArtefacts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "artefactName": {
          name: 'artefactName',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "approvalAfterActionMessage": {
          name: 'approvalAfterActionMessage',
          type: 'string'
        },
        "rejectionAfterActionMessage": {
          name: 'rejectionAfterActionMessage',
          type: 'string'
        },
        "approvalArtefactEntityName": {
          name: 'approvalArtefactEntityName',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
