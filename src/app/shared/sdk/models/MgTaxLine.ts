/* tslint:disable */

declare var Object: any;
export interface MgTaxLineInterface {
  "id"?: string;
  "invoiceInvoiceNumber": number;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgTaxLine implements MgTaxLineInterface {
  "id": string;
  "invoiceInvoiceNumber": number;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgTaxLineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgTaxLine`.
   */
  public static getModelName() {
    return "MgTaxLine";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgTaxLine for dynamic purposes.
  **/
  public static factory(data: MgTaxLineInterface): MgTaxLine{
    return new MgTaxLine(data);
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
      name: 'MgTaxLine',
      plural: 'MgTaxLines',
      path: 'MgTaxLines',
      idName: '',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "invoiceInvoiceNumber": {
          name: 'invoiceInvoiceNumber',
          type: 'number'
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
