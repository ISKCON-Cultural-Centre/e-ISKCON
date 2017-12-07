/* tslint:disable */
import {
  Payment,
  Pledge
} from '../index';

declare var Object: any;
export interface PledgePaymentInterface {
  "id": string;
  "instalmentNumber": number;
  "paymentId": string;
  "pledgeDate"?: Date;
  "pledgeId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkPledgePaymentPayment1rel?: Payment;
  fkPledgePaymentPledge1rel?: Pledge;
}

export class PledgePayment implements PledgePaymentInterface {
  "id": string;
  "instalmentNumber": number;
  "paymentId": string;
  "pledgeDate": Date;
  "pledgeId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkPledgePaymentPayment1rel: Payment;
  fkPledgePaymentPledge1rel: Pledge;
  constructor(data?: PledgePaymentInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PledgePayment`.
   */
  public static getModelName() {
    return "PledgePayment";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PledgePayment for dynamic purposes.
  **/
  public static factory(data: PledgePaymentInterface): PledgePayment{
    return new PledgePayment(data);
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
      name: 'PledgePayment',
      plural: 'PledgePayments',
      path: 'PledgePayments',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "instalmentNumber": {
          name: 'instalmentNumber',
          type: 'number'
        },
        "paymentId": {
          name: 'paymentId',
          type: 'string'
        },
        "pledgeDate": {
          name: 'pledgeDate',
          type: 'Date'
        },
        "pledgeId": {
          name: 'pledgeId',
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
        fkPledgePaymentPayment1rel: {
          name: 'fkPledgePaymentPayment1rel',
          type: 'Payment',
          model: 'Payment',
          relationType: 'belongsTo',
                  keyFrom: 'paymentId',
          keyTo: 'id'
        },
        fkPledgePaymentPledge1rel: {
          name: 'fkPledgePaymentPledge1rel',
          type: 'Pledge',
          model: 'Pledge',
          relationType: 'belongsTo',
                  keyFrom: 'pledgeId',
          keyTo: 'id'
        },
      }
    }
  }
}
