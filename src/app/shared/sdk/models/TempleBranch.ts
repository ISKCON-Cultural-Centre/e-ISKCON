/* tslint:disable */
import {
  Temple,
  PhysicalAddress
} from '../index';

declare var Object: any;
export interface TempleBranchInterface {
  "id"?: string;
  "name"?: string;
  "templeId"?: string;
  "physicalAddressId"?: string;
  "contactNumber"?: string;
  "contactName"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkTempleBranchTemple1rel?: Temple;
  fkTempleBranchPhysicalAddress1rel?: PhysicalAddress;
}

export class TempleBranch implements TempleBranchInterface {
  "id": string;
  "name": string;
  "templeId": string;
  "physicalAddressId": string;
  "contactNumber": string;
  "contactName": string;
  "created-on": Date;
  "updated-on": Date;
  fkTempleBranchTemple1rel: Temple;
  fkTempleBranchPhysicalAddress1rel: PhysicalAddress;
  constructor(data?: TempleBranchInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `TempleBranch`.
   */
  public static getModelName() {
    return "TempleBranch";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of TempleBranch for dynamic purposes.
  **/
  public static factory(data: TempleBranchInterface): TempleBranch{
    return new TempleBranch(data);
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
      name: 'TempleBranch',
      plural: 'TempleBranches',
      path: 'TempleBranches',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "templeId": {
          name: 'templeId',
          type: 'string'
        },
        "physicalAddressId": {
          name: 'physicalAddressId',
          type: 'string'
        },
        "contactNumber": {
          name: 'contactNumber',
          type: 'string'
        },
        "contactName": {
          name: 'contactName',
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
        fkTempleBranchTemple1rel: {
          name: 'fkTempleBranchTemple1rel',
          type: 'Temple',
          model: 'Temple',
          relationType: 'belongsTo',
                  keyFrom: 'templeId',
          keyTo: 'id'
        },
        fkTempleBranchPhysicalAddress1rel: {
          name: 'fkTempleBranchPhysicalAddress1rel',
          type: 'PhysicalAddress',
          model: 'PhysicalAddress',
          relationType: 'belongsTo',
                  keyFrom: 'physicalAddressId',
          keyTo: 'id'
        },
      }
    }
  }
}
