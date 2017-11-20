/* tslint:disable */
import {
  Circle,
  Devotee
} from '../index';

declare var Object: any;
export interface CircleDevoteeInterface {
  "devoteeId": string;
  "circleId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkCircleDevoteeCircle1rel?: Circle;
  fkTable1Devotee1rel?: Devotee;
}

export class CircleDevotee implements CircleDevoteeInterface {
  "devoteeId": string;
  "circleId": string;
  "created-on": Date;
  "updated-on": Date;
  fkCircleDevoteeCircle1rel: Circle;
  fkTable1Devotee1rel: Devotee;
  constructor(data?: CircleDevoteeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CircleDevotee`.
   */
  public static getModelName() {
    return "CircleDevotee";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CircleDevotee for dynamic purposes.
  **/
  public static factory(data: CircleDevoteeInterface): CircleDevotee{
    return new CircleDevotee(data);
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
      name: 'CircleDevotee',
      plural: 'CircleDevotees',
      path: 'CircleDevotees',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "circleId": {
          name: 'circleId',
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
        fkCircleDevoteeCircle1rel: {
          name: 'fkCircleDevoteeCircle1rel',
          type: 'Circle',
          model: 'Circle',
          relationType: 'belongsTo',
                  keyFrom: 'circleId',
          keyTo: 'id'
        },
        fkTable1Devotee1rel: {
          name: 'fkTable1Devotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
