/* tslint:disable */

declare var Object: any;
export interface TempleInterface {
  "id": string;
  "name": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "contactNumber": string;
  "contactName": string;
}

export class Temple implements TempleInterface {
  "id": string;
  "name": string;
  "addressLine1": string;
  "addressLine2": string;
  "addressArea": string;
  "addressCity": string;
  "addressCountry": string;
  "addressPin": string;
  "contactNumber": string;
  "contactName": string;
  constructor(data?: TempleInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Temple`.
   */
  public static getModelName() {
    return "Temple";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Temple for dynamic purposes.
  **/
  public static factory(data: TempleInterface): Temple{
    return new Temple(data);
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
      name: 'Temple',
      plural: 'Temples',
      path: 'Temples',
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
        "addressLine1": {
          name: 'addressLine1',
          type: 'string'
        },
        "addressLine2": {
          name: 'addressLine2',
          type: 'string'
        },
        "addressArea": {
          name: 'addressArea',
          type: 'string'
        },
        "addressCity": {
          name: 'addressCity',
          type: 'string'
        },
        "addressCountry": {
          name: 'addressCountry',
          type: 'string'
        },
        "addressPin": {
          name: 'addressPin',
          type: 'string'
        },
        "contactNumber": {
          name: 'contactNumber',
          type: 'string'
        },
        "contactName": {
          name: 'contactName',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
