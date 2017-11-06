/* tslint:disable */

declare var Object: any;
export interface DeekshaGuruInterface {
  "id": string;
  "name"?: string;
}

export class DeekshaGuru implements DeekshaGuruInterface {
  "id": string;
  "name": string;
  constructor(data?: DeekshaGuruInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DeekshaGuru`.
   */
  public static getModelName() {
    return "DeekshaGuru";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DeekshaGuru for dynamic purposes.
  **/
  public static factory(data: DeekshaGuruInterface): DeekshaGuru{
    return new DeekshaGuru(data);
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
      name: 'DeekshaGuru',
      plural: 'DeekshaGurus',
      path: 'DeekshaGurus',
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
      },
      relations: {
      }
    }
  }
}
