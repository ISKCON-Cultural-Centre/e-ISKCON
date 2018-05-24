/* tslint:disable */

declare var Object: any;
export interface DonationCategoryMasterInterface {
  "id": string;
  "donationCategoryName": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class DonationCategoryMaster implements DonationCategoryMasterInterface {
  "id": string;
  "donationCategoryName": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: DonationCategoryMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DonationCategoryMaster`.
   */
  public static getModelName() {
    return "DonationCategoryMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DonationCategoryMaster for dynamic purposes.
  **/
  public static factory(data: DonationCategoryMasterInterface): DonationCategoryMaster{
    return new DonationCategoryMaster(data);
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
      name: 'DonationCategoryMaster',
      plural: 'DonationCategoryMasters',
      path: 'DonationCategoryMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "donationCategoryName": {
          name: 'donationCategoryName',
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
