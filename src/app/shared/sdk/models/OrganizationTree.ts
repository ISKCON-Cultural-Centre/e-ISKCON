/* tslint:disable */

declare var Object: any;
export interface OrganizationTreeInterface {
  "lev1": string;
  "lev2"?: string;
  "lev3"?: string;
  "lev4"?: string;
  "id"?: number;
}

export class OrganizationTree implements OrganizationTreeInterface {
  "lev1": string;
  "lev2": string;
  "lev3": string;
  "lev4": string;
  "id": number;
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
        "lev1": {
          name: 'lev1',
          type: 'string'
        },
        "lev2": {
          name: 'lev2',
          type: 'string'
        },
        "lev3": {
          name: 'lev3',
          type: 'string'
        },
        "lev4": {
          name: 'lev4',
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
