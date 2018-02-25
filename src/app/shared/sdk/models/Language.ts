/* tslint:disable */

declare var Object: any;
export interface LanguageInterface {
  "id"?: string;
  "language": string;
  "created-on"?: Date;
  "updated-on"?: Date;
}

export class Language implements LanguageInterface {
  "id": string;
  "language": string;
  "created-on": Date;
  "updated-on": Date;
  constructor(data?: LanguageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Language`.
   */
  public static getModelName() {
    return "Language";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Language for dynamic purposes.
  **/
  public static factory(data: LanguageInterface): Language{
    return new Language(data);
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
      name: 'Language',
      plural: 'Languages',
      path: 'Languages',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "language": {
          name: 'language',
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
