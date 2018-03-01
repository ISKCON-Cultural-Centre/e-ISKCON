/* tslint:disable */

declare var Object: any;
export interface ProfessionMasterInterface {
  "professionId": string;
  "professionName": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class ProfessionMaster implements ProfessionMasterInterface {
  "professionId": string;
  "professionName": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: ProfessionMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ProfessionMaster`.
   */
  public static getModelName() {
    return "ProfessionMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ProfessionMaster for dynamic purposes.
  **/
  public static factory(data: ProfessionMasterInterface): ProfessionMaster{
    return new ProfessionMaster(data);
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
      name: 'ProfessionMaster',
      plural: 'ProfessionMasters',
      path: 'ProfessionMasters',
      idName: 'professionId',
      properties: {
        "professionId": {
          name: 'professionId',
          type: 'string'
        },
        "professionName": {
          name: 'professionName',
          type: 'string'
        },
        "createdOn": {
          name: 'createdOn',
          type: 'Date'
        },
        "updatedOn": {
          name: 'updatedOn',
          type: 'Date'
        },
        "createdBy": {
          name: 'createdBy',
          type: 'string'
        },
        "updatedBy": {
          name: 'updatedBy',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
