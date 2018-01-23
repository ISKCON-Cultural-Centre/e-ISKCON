/* tslint:disable */
import {
  ServiceMapping
} from '../index';

declare var Object: any;
export interface ServiceInterface {
  "id": string;
  "name": string;
  "description"?: string;
  "created"?: Date;
  "modified"?: Date;
  "created-on"?: Date;
  "updated-on"?: Date;
  principals?: ServiceMapping[];
}

export class Service implements ServiceInterface {
  "id": string;
  "name": string;
  "description": string;
  "created": Date;
  "modified": Date;
  "created-on": Date;
  "updated-on": Date;
  principals: ServiceMapping[];
  constructor(data?: ServiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Service`.
   */
  public static getModelName() {
    return "Service";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Service for dynamic purposes.
  **/
  public static factory(data: ServiceInterface): Service{
    return new Service(data);
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
      name: 'Service',
      plural: 'Services',
      path: 'Services',
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
        "description": {
          name: 'description',
          type: 'string'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
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
        principals: {
          name: 'principals',
          type: 'ServiceMapping[]',
          model: 'ServiceMapping',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'roleId'
        },
      }
    }
  }
}
