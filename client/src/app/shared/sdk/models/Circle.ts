/* tslint:disable */

declare var Object: any;
export interface CircleInterface {
  "id": string;
  "name"?: string;
  "leaderDevoteeId"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class Circle implements CircleInterface {
  "id": string;
  "name": string;
  "leaderDevoteeId": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: CircleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Circle`.
   */
  public static getModelName() {
    return "Circle";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Circle for dynamic purposes.
  **/
  public static factory(data: CircleInterface): Circle{
    return new Circle(data);
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
      name: 'Circle',
      plural: 'Circles',
      path: 'Circles',
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
        "leaderDevoteeId": {
          name: 'leaderDevoteeId',
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
      }
    }
  }
}
