/* tslint:disable */
import {
  MgOrder
} from '../index';

declare var Object: any;
export interface MgDeliveryNoteInterface {
  "id"?: string;
  "deliveredDate": Date;
  "deliveryNotes": string;
  "orderId": string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkDeliveryNoteOrder1rel?: MgOrder;
}

export class MgDeliveryNote implements MgDeliveryNoteInterface {
  "id": string;
  "deliveredDate": Date;
  "deliveryNotes": string;
  "orderId": string;
  "created-on": Date;
  "updated-on": Date;
  fkDeliveryNoteOrder1rel: MgOrder;
  constructor(data?: MgDeliveryNoteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgDeliveryNote`.
   */
  public static getModelName() {
    return "MgDeliveryNote";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgDeliveryNote for dynamic purposes.
  **/
  public static factory(data: MgDeliveryNoteInterface): MgDeliveryNote{
    return new MgDeliveryNote(data);
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
      name: 'MgDeliveryNote',
      plural: 'MgDeliveryNotes',
      path: 'MgDeliveryNotes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "deliveredDate": {
          name: 'deliveredDate',
          type: 'Date'
        },
        "deliveryNotes": {
          name: 'deliveryNotes',
          type: 'string'
        },
        "orderId": {
          name: 'orderId',
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
        fkDeliveryNoteOrder1rel: {
          name: 'fkDeliveryNoteOrder1rel',
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
