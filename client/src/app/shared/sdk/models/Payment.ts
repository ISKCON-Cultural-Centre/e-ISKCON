/* tslint:disable */
import {
  Devotee,
  DonationTypeMaster,
  PaymentModeMaster
} from '../index';

declare var Object: any;
export interface PaymentInterface {
  "id": string;
  "devoteeId": string;
  "date": Date;
  "paymentRefNumber"?: string;
  "donationTypeMasterId": string;
  "paymentModeMasterId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkPaymentDevotee2rel?: Devotee;
  fkPaymentDonationTypeMaster1rel?: DonationTypeMaster;
  fkPaymentPaymentModeMaster1rel?: PaymentModeMaster;
}

export class Payment implements PaymentInterface {
  "id": string;
  "devoteeId": string;
  "date": Date;
  "paymentRefNumber": string;
  "donationTypeMasterId": string;
  "paymentModeMasterId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkPaymentDevotee2rel: Devotee;
  fkPaymentDonationTypeMaster1rel: DonationTypeMaster;
  fkPaymentPaymentModeMaster1rel: PaymentModeMaster;
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
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "paymentRefNumber": {
          name: 'paymentRefNumber',
          type: 'string'
        },
        "donationTypeMasterId": {
          name: 'donationTypeMasterId',
          type: 'string'
        },
        "paymentModeMasterId": {
          name: 'paymentModeMasterId',
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
        fkPaymentDevotee2rel: {
          name: 'fkPaymentDevotee2rel',
          type: 'Devotee',
          model: 'Devotee'
        },
        fkPaymentDonationTypeMaster1rel: {
          name: 'fkPaymentDonationTypeMaster1rel',
          type: 'DonationTypeMaster',
          model: 'DonationTypeMaster'
        },
        fkPaymentPaymentModeMaster1rel: {
          name: 'fkPaymentPaymentModeMaster1rel',
          type: 'PaymentModeMaster',
          model: 'PaymentModeMaster'
        },
      }
    }
  }
}
