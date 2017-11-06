/* tslint:disable */
import {
  Circle,
  Devotee
} from '../index';

declare var Object: any;
export interface CircleDevoteeInterface {
  "circleId": string;
  "devoteeId": string;
  fkCircleDevoteeCircle1rel?: Circle;
  fkCircleDevoteeDevotee1rel?: Devotee;
}

export class CircleDevotee implements CircleDevoteeInterface {
  "circleId": string;
  "devoteeId": string;
  fkCircleDevoteeCircle1rel: Circle;
  fkCircleDevoteeDevotee1rel: Devotee;
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
      idName: 'circleId',
      properties: {
        "circleId": {
          name: 'circleId',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
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
        fkCircleDevoteeDevotee1rel: {
          name: 'fkCircleDevoteeDevotee1rel',
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
