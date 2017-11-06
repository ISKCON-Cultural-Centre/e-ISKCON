/* tslint:disable */
import {
  SpiritualLevelMaster
} from '../index';

declare var Object: any;
export interface DevoteeInterface {
  "id": string;
  "legalName": string;
  "spiritualName"?: string;
  "sex": boolean;
  "contactNumber"?: string;
  "altContactNumber"?: string;
  "emailId"?: string;
  "shikshaLevel"?: string;
  "addressLine1"?: string;
  "addressLine2"?: string;
  "addressArea"?: string;
  "addressCity"?: string;
  "addressPin"?: string;
  "source": string;
  "createdDate": Date;
  "spiritualLevelMasterId": string;
  "realm"?: string;
  "username"?: string;
  "email": string;
  "emailVerified"?: boolean;
  "password"?: string;
  accessTokens?: any[];
  fkDevoteeSpiritualLevelMaster1rel?: SpiritualLevelMaster;
}

export class Devotee implements DevoteeInterface {
  "id": string;
  "legalName": string;
  "spiritualName": string;
  "sex": boolean;
  "contactNumber": string;
  "altContactNumber": string;
  "emailId": string;
  "shikshaLevel": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressPin": string;
  "source": string;
  "createdDate": Date;
  "spiritualLevelMasterId": string;
  "realm": string;
  "username": string;
  "email": string;
  "emailVerified": boolean;
  "password": string;
  accessTokens: any[];
  fkDevoteeSpiritualLevelMaster1rel: SpiritualLevelMaster;
  constructor(data?: DevoteeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Devotee`.
   */
  public static getModelName() {
    return "Devotee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Devotee for dynamic purposes.
  **/
  public static factory(data: DevoteeInterface): Devotee{
    return new Devotee(data);
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
      name: 'Devotee',
      plural: 'Devotees',
      path: 'Devotees',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "legalName": {
          name: 'legalName',
          type: 'string'
        },
        "spiritualName": {
          name: 'spiritualName',
          type: 'string'
        },
        "sex": {
          name: 'sex',
          type: 'boolean'
        },
        "contactNumber": {
          name: 'contactNumber',
          type: 'string'
        },
        "altContactNumber": {
          name: 'altContactNumber',
          type: 'string'
        },
        "emailId": {
          name: 'emailId',
          type: 'string'
        },
        "shikshaLevel": {
          name: 'shikshaLevel',
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
        "addressPin": {
          name: 'addressPin',
          type: 'string'
        },
        "source": {
          name: 'source',
          type: 'string'
        },
        "createdDate": {
          name: 'createdDate',
          type: 'Date'
        },
        "spiritualLevelMasterId": {
          name: 'spiritualLevelMasterId',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: '',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        fkDevoteeSpiritualLevelMaster1rel: {
          name: 'fkDevoteeSpiritualLevelMaster1rel',
          type: 'SpiritualLevelMaster',
          model: 'SpiritualLevelMaster',
          relationType: 'belongsTo',
                  keyFrom: 'spiritualLevelMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
