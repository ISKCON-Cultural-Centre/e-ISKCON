/* tslint:disable */

declare var Object: any;
export interface DonationTypeMasterInterface {
  "id": string;
  "donationTypeName": string;
}

export class DonationTypeMaster implements DonationTypeMasterInterface {
  "id": string;
  "donationTypeName": string;
  constructor(data?: DonationTypeMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DonationTypeMaster`.
   */
  public static getModelName() {
    return "DonationTypeMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DonationTypeMaster for dynamic purposes.
  **/
  public static factory(data: DonationTypeMasterInterface): DonationTypeMaster{
    return new DonationTypeMaster(data);
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
      name: 'DonationTypeMaster',
      plural: 'DonationTypeMasters',
      path: 'DonationTypeMasters',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "donationTypeName": {
          name: 'donationTypeName',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
