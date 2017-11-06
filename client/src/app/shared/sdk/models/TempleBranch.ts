/* tslint:disable */
import {
  Temple
} from '../index';

declare var Object: any;
export interface TempleBranchInterface {
  "id": string;
  "name": string;
  "templeId": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "contactNumber": string;
  "contactName": string;
  fkTempleBranchTemple1rel?: Temple;
}

export class TempleBranch implements TempleBranchInterface {
  "id": string;
  "name": string;
  "templeId": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "contactNumber": string;
  "contactName": string;
  fkTempleBranchTemple1rel: Temple;
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
        "addressLine1": {
          name: 'addressLine1',
          type: 'string'
        },
        "addressLine2": {
          name: 'addressLine2',
          type: 'string'
        },
        "addressArea": {
          name: 'addressArea',
          type: 'string'
        },
        "addressCity": {
          name: 'addressCity',
          type: 'string'
        },
        "addressCountry": {
          name: 'addressCountry',
          type: 'string'
        },
        "addressPin": {
          name: 'addressPin',
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
      }
    }
  }
}
