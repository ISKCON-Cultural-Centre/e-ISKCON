/* tslint:disable */
import {
  Circle,
  ServiceRoleMapping,
  Accesstoken,
  AsramaMaster,
  Language,
  GothraMaster,
  NakshatraMaster
} from '../index';

declare var Object: any;
export interface DevoteeInterface {
  "id"?: string;
  "legalName"?: string;
  "circleId"?: string;
  "spiritualName"?: string;
  "gender"?: string;
  "shikshaLevel"?: string;
  "creditLimit": number;
  "realm"?: string;
  "username"?: string;
  "email"?: string;
  "verificationtoken"?: string;
  "createdBy"?: string;
  "updatedBy"?: string;
  "accessId"?: string;
  "gothra"?: string;
  "nakshatra"?: string;
  "governmentUniqueId"?: string;
  "incomeTaxId"?: string;
  "lpmId"?: string;
  "kcAssociationDate"?: Date;
  "motherTongueLanguageId": string;
  "dateOfBirth"?: Date;
  "dayMonthOfBirth": string;
  "asramaMasterId"?: string;
  "emailVerified"?: boolean;
  "created-on"?: Date;
  "updated-on"?: Date;
  "password"?: string;
  fkDevoteeCircle1rel?: Circle;
  roleMappings?: ServiceRoleMapping[];
  accessTokens?: Accesstoken[];
  fkDevoteeAsramaMaster1rel?: AsramaMaster;
  fkDevoteeLanguage1rel?: Language;
  fkDevoteeGothraMaster1rel?: GothraMaster;
  fkDevoteeNakshatraMaster1rel?: NakshatraMaster;
}

export class Devotee implements DevoteeInterface {
  "id": string;
  "legalName": string;
  "circleId": string;
  "spiritualName": string;
  "gender": string;
  "shikshaLevel": string;
  "creditLimit": number;
  "realm": string;
  "username": string;
  "email": string;
  "verificationtoken": string;
  "createdBy": string;
  "updatedBy": string;
  "accessId": string;
  "gothra": string;
  "nakshatra": string;
  "governmentUniqueId": string;
  "incomeTaxId": string;
  "lpmId": string;
  "kcAssociationDate": Date;
  "motherTongueLanguageId": string;
  "dateOfBirth": Date;
  "dayMonthOfBirth": string;
  "asramaMasterId": string;
  "emailVerified": boolean;
  "created-on": Date;
  "updated-on": Date;
  "password": string;
  fkDevoteeCircle1rel: Circle;
  roleMappings: ServiceRoleMapping[];
  accessTokens: Accesstoken[];
  fkDevoteeAsramaMaster1rel: AsramaMaster;
  fkDevoteeLanguage1rel: Language;
  fkDevoteeGothraMaster1rel: GothraMaster;
  fkDevoteeNakshatraMaster1rel: NakshatraMaster;
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
        "circleId": {
          name: 'circleId',
          type: 'string'
        },
        "spiritualName": {
          name: 'spiritualName',
          type: 'string'
        },
        "gender": {
          name: 'gender',
          type: 'string'
        },
        "shikshaLevel": {
          name: 'shikshaLevel',
          type: 'string'
        },
        "creditLimit": {
          name: 'creditLimit',
          type: 'number'
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
        "verificationtoken": {
          name: 'verificationtoken',
          type: 'string'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
          type: 'string'
        },
        "accessId": {
          name: 'accessId',
          type: 'string'
        },
        "gothra": {
          name: 'gothra',
          type: 'string'
        },
        "nakshatra": {
          name: 'nakshatra',
          type: 'string'
        },
        "governmentUniqueId": {
          name: 'governmentUniqueId',
          type: 'string'
        },
        "incomeTaxId": {
          name: 'incomeTaxId',
          type: 'string'
        },
        "lpmId": {
          name: 'lpmId',
          type: 'string'
        },
        "kcAssociationDate": {
          name: 'kcAssociationDate',
          type: 'Date'
        },
        "motherTongueLanguageId": {
          name: 'motherTongueLanguageId',
          type: 'string'
        },
        "dateOfBirth": {
          name: 'dateOfBirth',
          type: 'Date'
        },
        "dayMonthOfBirth": {
          name: 'dayMonthOfBirth',
          type: 'string'
        },
        "asramaMasterId": {
          name: 'asramaMasterId',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'boolean'
        },
        "created-on": {
          name: 'created-on',
          type: 'Date'
        },
        "updated-on": {
          name: 'updated-on',
          type: 'Date'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        fkDevoteeCircle1rel: {
          name: 'fkDevoteeCircle1rel',
          type: 'Circle',
          model: 'Circle',
          relationType: 'belongsTo',
                  keyFrom: 'circleId',
          keyTo: 'id'
        },
        roleMappings: {
          name: 'roleMappings',
          type: 'ServiceRoleMapping[]',
          model: 'ServiceRoleMapping',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'principalId'
        },
        accessTokens: {
          name: 'accessTokens',
          type: 'Accesstoken[]',
          model: 'Accesstoken',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'userId'
        },
        fkDevoteeAsramaMaster1rel: {
          name: 'fkDevoteeAsramaMaster1rel',
          type: 'AsramaMaster',
          model: 'AsramaMaster',
          relationType: 'belongsTo',
                  keyFrom: 'asramaMasterId',
          keyTo: 'id'
        },
        fkDevoteeLanguage1rel: {
          name: 'fkDevoteeLanguage1rel',
          type: 'Language',
          model: 'Language',
          relationType: 'belongsTo',
                  keyFrom: 'motherTongueLanguageId',
          keyTo: 'id'
        },
        fkDevoteeGothraMaster1rel: {
          name: 'fkDevoteeGothraMaster1rel',
          type: 'GothraMaster',
          model: 'GothraMaster',
          relationType: 'belongsTo',
                  keyFrom: 'gothra',
          keyTo: 'gothra'
        },
        fkDevoteeNakshatraMaster1rel: {
          name: 'fkDevoteeNakshatraMaster1rel',
          type: 'NakshatraMaster',
          model: 'NakshatraMaster',
          relationType: 'belongsTo',
                  keyFrom: 'nakshatra',
          keyTo: 'nakshatra'
        },
      }
    }
  }
}
