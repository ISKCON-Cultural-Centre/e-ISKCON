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
  "paymentModeMasterId": number;
  "paymentRefNumber"?: string;
  "donationTypeMasterId": string;
  fkPaymentDevotee2rel?: Devotee;
  fkPaymentDonationTypeMaster1rel?: DonationTypeMaster;
  fkPaymentPaymentModeMaster2rel?: PaymentModeMaster;
}

export class Payment implements PaymentInterface {
  "id": string;
  "devoteeId": string;
  "date": Date;
  "paymentModeMasterId": number;
  "paymentRefNumber": string;
  "donationTypeMasterId": string;
  fkPaymentDevotee2rel: Devotee;
  fkPaymentDonationTypeMaster1rel: DonationTypeMaster;
  fkPaymentPaymentModeMaster2rel: PaymentModeMaster;
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
        "date": {
          name: 'date',
          type: 'Date'
        },
        "paymentModeMasterId": {
          name: 'paymentModeMasterId',
          type: 'number'
        },
        "paymentRefNumber": {
          name: 'paymentRefNumber',
          type: 'string'
        },
        "donationTypeMasterId": {
          name: 'donationTypeMasterId',
          type: 'string'
        },
      },
      relations: {
        fkPaymentDevotee2rel: {
          name: 'fkPaymentDevotee2rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkPaymentDonationTypeMaster1rel: {
          name: 'fkPaymentDonationTypeMaster1rel',
          type: 'DonationTypeMaster',
          model: 'DonationTypeMaster',
          relationType: 'belongsTo',
                  keyFrom: 'donationTypeMasterId',
          keyTo: 'id'
        },
        fkPaymentPaymentModeMaster2rel: {
          name: 'fkPaymentPaymentModeMaster2rel',
          type: 'PaymentModeMaster',
          model: 'PaymentModeMaster',
          relationType: 'belongsTo',
                  keyFrom: 'paymentModeMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
