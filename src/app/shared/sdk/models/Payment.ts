/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface PaymentInterface {
  "id"?: string;
  "devoteeId": string;
  "paymentModeMasterId": string;
  "paymentDate": Date;
  "paymentAmount": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkOrderPaymentDevotee1rel?: Devotee;
  fkDevoteePaymentPaymentModeMaster1rel?: any;
}

export class Payment implements PaymentInterface {
  "id": string;
  "devoteeId": string;
  "paymentModeMasterId": string;
  "paymentDate": Date;
  "paymentAmount": string;
  "created-on": Date;
  "updated-on": Date;
  fkOrderPaymentDevotee1rel: Devotee;
  fkDevoteePaymentPaymentModeMaster1rel: any;
  constructor(data?: PaymentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Payment`.
   */
  public static getModelName() {
    return "Payment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Payment for dynamic purposes.
  **/
  public static factory(data: PaymentInterface): Payment{
    return new Payment(data);
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
      name: 'Payment',
      plural: 'Payments',
      path: 'Payments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "paymentModeMasterId": {
          name: 'paymentModeMasterId',
          type: 'string'
        },
        "paymentDate": {
          name: 'paymentDate',
          type: 'Date'
        },
        "paymentAmount": {
          name: 'paymentAmount',
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
        fkOrderPaymentDevotee1rel: {
          name: 'fkOrderPaymentDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDevoteePaymentPaymentModeMaster1rel: {
          name: 'fkDevoteePaymentPaymentModeMaster1rel',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'paymentModeMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
