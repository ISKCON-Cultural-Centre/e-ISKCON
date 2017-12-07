/* tslint:disable */

declare var Object: any;
export interface BookRequestStatusInterface {
  "id": string;
  "requestStatus": string;
  "requestDescription": string;
  "crudAllowed": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
}

export class BookRequestStatus implements BookRequestStatusInterface {
  "id": string;
  "requestStatus": string;
  "requestDescription": string;
  "crudAllowed": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  constructor(data?: BookRequestStatusInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookRequestStatus`.
   */
  public static getModelName() {
    return "BookRequestStatus";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookRequestStatus for dynamic purposes.
  **/
  public static factory(data: BookRequestStatusInterface): BookRequestStatus{
    return new BookRequestStatus(data);
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
      name: 'BookRequestStatus',
      plural: 'BookRequestStatuses',
      path: 'BookRequestStatuses',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "requestStatus": {
          name: 'requestStatus',
          type: 'string'
        },
        "requestDescription": {
          name: 'requestDescription',
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
      },
      relations: {
      }
    }
  }
}
