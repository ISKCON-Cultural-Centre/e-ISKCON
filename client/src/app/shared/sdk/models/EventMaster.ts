/* tslint:disable */

declare var Object: any;
export interface EventMasterInterface {
  "id": string;
  "eventName": string;
}

export class EventMaster implements EventMasterInterface {
  "id": string;
  "eventName": string;
  constructor(data?: EventMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EventMaster`.
   */
  public static getModelName() {
    return "EventMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EventMaster for dynamic purposes.
  **/
  public static factory(data: EventMasterInterface): EventMaster{
    return new EventMaster(data);
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
      name: 'EventMaster',
      plural: 'EventMasters',
      path: 'EventMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "eventName": {
          name: 'eventName',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
