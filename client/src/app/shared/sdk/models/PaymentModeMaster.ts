/* tslint:disable */

declare var Object: any;
export interface PaymentModeMasterInterface {
  "id": number;
  "paymentModeName": string;
  "activeInd": number;
}

export class PaymentModeMaster implements PaymentModeMasterInterface {
  "id": number;
  "paymentModeName": string;
  "activeInd": number;
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
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "paymentModeName": {
          name: 'paymentModeName',
          type: 'string'
        },
        "activeInd": {
          name: 'activeInd',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
