/* tslint:disable */

declare var Object: any;
export interface OrganizationChildrenInterface {
  "parentId": string;
  "nodeId": string;
  "parentName": string;
  "nodeName": string;
  "id"?: number;
}

export class OrganizationChildren implements OrganizationChildrenInterface {
  "parentId": string;
  "nodeId": string;
  "parentName": string;
  "nodeName": string;
  "id": number;
  constructor(data?: OrganizationChildrenInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrganizationChildren`.
   */
  public static getModelName() {
    return "OrganizationChildren";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrganizationChildren for dynamic purposes.
  **/
  public static factory(data: OrganizationChildrenInterface): OrganizationChildren{
    return new OrganizationChildren(data);
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
      name: 'OrganizationChildren',
      plural: 'OrganizationChildren',
      path: 'OrganizationChildren',
      idName: 'id',
      properties: {
        "parentId": {
          name: 'parentId',
          type: 'string'
        },
        "nodeId": {
          name: 'nodeId',
          type: 'string'
        },
        "parentName": {
          name: 'parentName',
          type: 'string'
        },
        "nodeName": {
          name: 'nodeName',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
