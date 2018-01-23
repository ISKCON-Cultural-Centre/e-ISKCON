/* tslint:disable */
import {
  Payment,
  MgOrder
} from '../index';

declare var Object: any;
export interface MgInvoiceInterface {
  "invoiceNumber": number;
  "orderId": string;
  "paymentId"?: string;
  "creditNoteId"?: string;
  "invoiceAmount": string;
  fkInvoicePayment1rel?: Payment;
  fkInvoiceOrder1rel?: MgOrder;
}

export class MgInvoice implements MgInvoiceInterface {
  "invoiceNumber": number;
  "orderId": string;
  "paymentId": string;
  "creditNoteId": string;
  "invoiceAmount": string;
  fkInvoicePayment1rel: Payment;
  fkInvoiceOrder1rel: MgOrder;
  constructor(data?: MgInvoiceInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgInvoice`.
   */
  public static getModelName() {
    return "MgInvoice";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgInvoice for dynamic purposes.
  **/
  public static factory(data: MgInvoiceInterface): MgInvoice{
    return new MgInvoice(data);
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
      name: 'MgInvoice',
      plural: 'MgInvoices',
      path: 'MgInvoices',
      idName: 'invoiceNumber',
      properties: {
        "invoiceNumber": {
          name: 'invoiceNumber',
          type: 'number'
        },
        "orderId": {
          name: 'orderId',
          type: 'string'
        },
        "paymentId": {
          name: 'paymentId',
          type: 'string'
        },
        "creditNoteId": {
          name: 'creditNoteId',
          type: 'string'
        },
        "invoiceAmount": {
          name: 'invoiceAmount',
          type: 'string'
        },
      },
      relations: {
        fkInvoicePayment1rel: {
          name: 'fkInvoicePayment1rel',
          type: 'Payment',
          model: 'Payment',
          relationType: 'belongsTo',
                  keyFrom: 'paymentId',
          keyTo: 'id'
        },
        fkInvoiceOrder1rel: {
          name: 'fkInvoiceOrder1rel',
          type: 'MgOrder',
          model: 'MgOrder',
          relationType: 'belongsTo',
                  keyFrom: 'orderId',
          keyTo: 'id'
        },
      }
    }
  }
}
