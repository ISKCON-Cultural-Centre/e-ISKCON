/* tslint:disable */

declare var Object: any;
export interface MgOrderStatusInterface {
  "id"?: string;
  "orderStatus": string;
  "orderStatusDescription": string;
  "crudAllowed": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class MgOrderStatus implements MgOrderStatusInterface {
  "id": string;
  "orderStatus": string;
  "orderStatusDescription": string;
  "crudAllowed": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: MgOrderStatusInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MgOrderStatus`.
   */
  public static getModelName() {
    return "MgOrderStatus";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MgOrderStatus for dynamic purposes.
  **/
  public static factory(data: MgOrderStatusInterface): MgOrderStatus{
    return new MgOrderStatus(data);
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
      name: 'MgOrderStatus',
      plural: 'MgOrderStatuses',
      path: 'MgOrderStatuses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "orderStatus": {
          name: 'orderStatus',
          type: 'string'
        },
        "orderStatusDescription": {
          name: 'orderStatusDescription',
          type: 'string'
        },
        "crudAllowed": {
          name: 'crudAllowed',
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
      }
    }
  }
}
