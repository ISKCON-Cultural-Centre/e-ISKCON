/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface DevoteeAsramaInterface {
  "devoteeId": string;
  "asramaMasterId": string;
  "entryDate": Date;
  fkTable1AsramaMaster1rel?: any;
  fkTable1Devotee3rel?: Devotee;
}

export class DevoteeAsrama implements DevoteeAsramaInterface {
  "devoteeId": string;
  "asramaMasterId": string;
  "entryDate": Date;
  fkTable1AsramaMaster1rel: any;
  fkTable1Devotee3rel: Devotee;
  constructor(data?: DevoteeAsramaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `DevoteeAsrama`.
   */
  public static getModelName() {
    return "DevoteeAsrama";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of DevoteeAsrama for dynamic purposes.
  **/
  public static factory(data: DevoteeAsramaInterface): DevoteeAsrama{
    return new DevoteeAsrama(data);
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
      name: 'DevoteeAsrama',
      plural: 'DevoteeAsramas',
      path: 'DevoteeAsramas',
      idName: 'devoteeId',
      properties: {
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "asramaMasterId": {
          name: 'asramaMasterId',
          type: 'string'
        },
        "entryDate": {
          name: 'entryDate',
          type: 'Date'
        },
      },
      relations: {
        fkTable1AsramaMaster1rel: {
          name: 'fkTable1AsramaMaster1rel',
          type: 'any',
          model: '',
          relationType: 'belongsTo',
                  keyFrom: 'asramaMasterId',
          keyTo: 'id'
        },
        fkTable1Devotee3rel: {
          name: 'fkTable1Devotee3rel',
          type: 'Devotee',
          model: 'Devotee',
          relationType: 'belongsTo',
                  keyFrom: 'devoteeId',
          keyTo: 'id'
        },
      }
    }
  }
}
