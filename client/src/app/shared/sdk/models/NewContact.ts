/* tslint:disable */

declare var Object: any;
export interface NewContactInterface {
  "id": string;
  "name"?: string;
  "addressline1"?: string;
  "addressarea"?: string;
  "addresscity"?: string;
  "addresspin"?: string;
  "phone"?: string;
  "email"?: string;
  "reference"?: string;
  "comments"?: string;
  "altphone"?: string;
}

export class NewContact implements NewContactInterface {
  "id": string;
  "name": string;
  "addressline1": string;
  "addressarea": string;
  "addresscity": string;
  "addresspin": string;
  "phone": string;
  "email": string;
  "reference": string;
  "comments": string;
  "altphone": string;
  constructor(data?: NewContactInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NewContact`.
   */
  public static getModelName() {
    return "NewContact";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NewContact for dynamic purposes.
  **/
  public static factory(data: NewContactInterface): NewContact{
    return new NewContact(data);
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
      name: 'NewContact',
      plural: 'NewContacts',
      path: 'NewContacts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
        "addressline1": {
          name: 'addressline1',
          type: 'string'
        },
        "addressarea": {
          name: 'addressarea',
          type: 'string'
        },
        "addresscity": {
          name: 'addresscity',
          type: 'string'
        },
        "addresspin": {
          name: 'addresspin',
          type: 'string'
        },
        "phone": {
          name: 'phone',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "reference": {
          name: 'reference',
          type: 'string'
        },
        "comments": {
          name: 'comments',
          type: 'string'
        },
        "altphone": {
          name: 'altphone',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
