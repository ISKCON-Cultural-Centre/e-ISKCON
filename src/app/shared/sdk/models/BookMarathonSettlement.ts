/* tslint:disable */
import {
  Devotee
} from '../index';

declare var Object: any;
export interface BookMarathonSettlementInterface {
  "id": string;
  "devoteeId": string;
  "settlementDate": Date;
  "creditAmount": string;
  "returnAmount": string;
  "balanceAmount": string;
  "settlementInd": boolean;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkTable2Devotee1rel?: Devotee;
}

export class BookMarathonSettlement implements BookMarathonSettlementInterface {
  "id": string;
  "devoteeId": string;
  "settlementDate": Date;
  "creditAmount": string;
  "returnAmount": string;
  "balanceAmount": string;
  "settlementInd": boolean;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkTable2Devotee1rel: Devotee;
  constructor(data?: BookMarathonSettlementInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `BookMarathonSettlement`.
   */
  public static getModelName() {
    return "BookMarathonSettlement";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of BookMarathonSettlement for dynamic purposes.
  **/
  public static factory(data: BookMarathonSettlementInterface): BookMarathonSettlement{
    return new BookMarathonSettlement(data);
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
      name: 'BookMarathonSettlement',
      plural: 'BookMarathonSettlements',
      path: 'BookMarathonSettlements',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "settlementDate": {
          name: 'settlementDate',
          type: 'Date'
        },
        "creditAmount": {
          name: 'creditAmount',
          type: 'string'
        },
        "returnAmount": {
          name: 'returnAmount',
          type: 'string'
        },
        "balanceAmount": {
          name: 'balanceAmount',
          type: 'string'
        },
        "settlementInd": {
          name: 'settlementInd',
          type: 'boolean'
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
        fkTable2Devotee1rel: {
          name: 'fkTable2Devotee1rel',
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
