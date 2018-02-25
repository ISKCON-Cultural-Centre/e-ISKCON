/* tslint:disable */

declare var Object: any;
export interface FestivalMasterInterface {
  "id"?: string;
  "festivalName": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class FestivalMaster implements FestivalMasterInterface {
  "id": string;
  "festivalName": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: FestivalMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `FestivalMaster`.
   */
  public static getModelName() {
    return "FestivalMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of FestivalMaster for dynamic purposes.
  **/
  public static factory(data: FestivalMasterInterface): FestivalMaster{
    return new FestivalMaster(data);
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
      name: 'FestivalMaster',
      plural: 'FestivalMasters',
      path: 'FestivalMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "festivalName": {
          name: 'festivalName',
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
