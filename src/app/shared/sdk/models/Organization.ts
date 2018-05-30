/* tslint:disable */
import {
  OrganizationLevelMaster
} from '../index';

declare var Object: any;
export interface OrganizationInterface {
  "id": string;
  "name": string;
  "organizationLevelMasterId": string;
  "parentId"?: string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkOrganizationOrganization1rel?: Organization;
  fkOrganizationOrganizationLevelMaster1rel?: OrganizationLevelMaster;
}

export class Organization implements OrganizationInterface {
  "id": string;
  "name": string;
  "organizationLevelMasterId": string;
  "parentId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkOrganizationOrganization1rel: Organization;
  fkOrganizationOrganizationLevelMaster1rel: OrganizationLevelMaster;
  constructor(data?: OrganizationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Organization`.
   */
  public static getModelName() {
    return "Organization";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Organization for dynamic purposes.
  **/
  public static factory(data: OrganizationInterface): Organization{
    return new Organization(data);
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
      name: 'Organization',
      plural: 'Organizations',
      path: 'Organizations',
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
        "organizationLevelMasterId": {
          name: 'organizationLevelMasterId',
          type: 'string'
        },
        "parentId": {
          name: 'parentId',
          type: 'string'
        },
        "createdOn": {
          name: 'createdOn',
          type: 'Date'
        },
        "updatedOn": {
          name: 'updatedOn',
          type: 'Date'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
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
        fkOrganizationOrganization1rel: {
          name: 'fkOrganizationOrganization1rel',
          type: 'Organization',
          model: 'Organization',
          relationType: 'belongsTo',
                  keyFrom: 'parentId',
          keyTo: 'id'
        },
        fkOrganizationOrganizationLevelMaster1rel: {
          name: 'fkOrganizationOrganizationLevelMaster1rel',
          type: 'OrganizationLevelMaster',
          model: 'OrganizationLevelMaster',
          relationType: 'belongsTo',
                  keyFrom: 'organizationLevelMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
