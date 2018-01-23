/* tslint:disable */
import {
  Devotee,
  Language
} from '../index';

declare var Object: any;
export interface DevoteeLanguageInterface {
  "devoteeId": string;
  "languageId": string;
  "readInd": number;
  "writeInd": number;
  "speakInd": number;
  fkDevoteeLanguageDevotee1rel?: Devotee;
  fkTable1Language1rel?: Language;
}

export class DevoteeLanguage implements DevoteeLanguageInterface {
  "devoteeId": string;
  "languageId": string;
  "readInd": number;
  "writeInd": number;
  "speakInd": number;
  fkDevoteeLanguageDevotee1rel: Devotee;
  fkTable1Language1rel: Language;
  constructor(data?: DevoteeLanguageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeLanguage`.
   */
  public static getModelName() {
    return "DevoteeLanguage";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeLanguage for dynamic purposes.
  **/
  public static factory(data: DevoteeLanguageInterface): DevoteeLanguage{
    return new DevoteeLanguage(data);
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
      name: 'DevoteeLanguage',
      plural: 'DevoteeLanguages',
      path: 'DevoteeLanguages',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "languageId": {
          name: 'languageId',
          type: 'string'
        },
        "readInd": {
          name: 'readInd',
          type: 'number'
        },
        "writeInd": {
          name: 'writeInd',
          type: 'number'
        },
        "speakInd": {
          name: 'speakInd',
          type: 'number'
        },
      },
      relations: {
        fkDevoteeLanguageDevotee1rel: {
          name: 'fkDevoteeLanguageDevotee1rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
        fkTable1Language1rel: {
          name: 'fkTable1Language1rel',
          type: 'Language',
          model: 'Language',
          relationType: 'belongsTo',
                  keyFrom: 'languageId',
          keyTo: 'id'
        },
      }
    }
  }
}
