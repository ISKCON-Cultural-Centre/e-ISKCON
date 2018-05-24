/* tslint:disable */
import {
  Devotee,
  DonationTypeMaster,
  Payment
} from '../index';

declare var Object: any;
export interface DonationReceiptInterface {
  "id"?: string;
  "devoteeId": string;
  "eventDonationItemId": string;
  "mgPaymentId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  "donationTypeMasterId"?: string;
  fkDonationReceiptDevotee1rel?: Devotee;
  fkDonationReceiptDonationTypeMaster1rel?: DonationTypeMaster;
  fkDonationReceiptMgPayment1rel?: Payment;
}

export class DonationReceipt implements DonationReceiptInterface {
  "id": string;
  "devoteeId": string;
  "eventDonationItemId": string;
  "mgPaymentId": string;
  "created-on": Date;
  "updated-on": Date;
  "donationTypeMasterId": string;
  fkDonationReceiptDevotee1rel: Devotee;
  fkDonationReceiptDonationTypeMaster1rel: DonationTypeMaster;
  fkDonationReceiptMgPayment1rel: Payment;
  constructor(data?: DonationReceiptInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DonationReceipt`.
   */
  public static getModelName() {
    return "DonationReceipt";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DonationReceipt for dynamic purposes.
  **/
  public static factory(data: DonationReceiptInterface): DonationReceipt{
    return new DonationReceipt(data);
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
      name: 'DonationReceipt',
      plural: 'DonationReceipts',
      path: 'DonationReceipts',
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
        "eventDonationItemId": {
          name: 'eventDonationItemId',
          type: 'string'
        },
        "mgPaymentId": {
          name: 'mgPaymentId',
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
        "donationTypeMasterId": {
          name: 'donationTypeMasterId',
          type: 'string'
        },
      },
      relations: {
        fkDonationReceiptDevotee1rel: {
          name: 'fkDonationReceiptDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkDonationReceiptDonationTypeMaster1rel: {
          name: 'fkDonationReceiptDonationTypeMaster1rel',
          type: 'DonationTypeMaster',
          model: 'DonationTypeMaster',
          relationType: 'belongsTo',
                  keyFrom: 'donationTypeMasterId',
          keyTo: 'id'
        },
        fkDonationReceiptMgPayment1rel: {
          name: 'fkDonationReceiptMgPayment1rel',
          type: 'Payment',
          model: 'Payment',
          relationType: 'belongsTo',
                  keyFrom: 'mgPaymentId',
          keyTo: 'id'
        },
      }
    }
  }
}
