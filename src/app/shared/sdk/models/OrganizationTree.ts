/* tslint:disable */

declare var Object: any;
export interface OrganizationTreeInterface {
  "id": string;
  "name"?: string;
  "depth": number;
  "displayOrder": number;
}

export class OrganizationTree implements OrganizationTreeInterface {
  "id": string;
  "name": string;
  "depth": number;
  "displayOrder": number;
  constructor(data?: OrganizationTreeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OrganizationTree`.
   */
  public static getModelName() {
    return "OrganizationTree";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OrganizationTree for dynamic purposes.
  **/
  public static factory(data: OrganizationTreeInterface): OrganizationTree{
    return new OrganizationTree(data);
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
      name: 'OrganizationTree',
      plural: 'OrganizationTrees',
      path: 'OrganizationTrees',
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
        "depth": {
          name: 'depth',
          type: 'number'
        },
        "displayOrder": {
          name: 'displayOrder',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
