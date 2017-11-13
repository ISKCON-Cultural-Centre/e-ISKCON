/* tslint:disable */

declare var Object: any;
export interface PaymentModeMasterInterface {
  "id": string;
  "paymentModeName": string;
  "activeInd": number;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class PaymentModeMaster implements PaymentModeMasterInterface {
  "id": string;
  "paymentModeName": string;
  "activeInd": number;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: PaymentModeMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PaymentModeMaster`.
   */
  public static getModelName() {
    return "PaymentModeMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PaymentModeMaster for dynamic purposes.
  **/
  public static factory(data: PaymentModeMasterInterface): PaymentModeMaster{
    return new PaymentModeMaster(data);
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
      name: 'PaymentModeMaster',
      plural: 'PaymentModeMasters',
      path: 'PaymentModeMasters',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "paymentModeName": {
          name: 'paymentModeName',
          type: 'string'
        },
        "activeInd": {
          name: 'activeInd',
          type: 'number'
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
