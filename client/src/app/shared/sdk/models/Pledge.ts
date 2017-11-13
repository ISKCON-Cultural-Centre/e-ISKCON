/* tslint:disable */
import {
  Devotee,
  DonationTypeMaster
} from '../index';

declare var Object: any;
export interface PledgeInterface {
  "id": string;
  "startDate": Date;
  "endDate"?: string;
  "pledgeAmount": string;
  "instalmentCount"?: number;
  "pauseInd": number;
  "devoteeId": string;
  "donationTypeMasterId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  "created-on"?: Date;
  "updated-on"?: Date;
  fkPledgeDevotee2rel?: Devotee;
  fkPledgeDonationTypeMaster1rel?: DonationTypeMaster;
}

export class Pledge implements PledgeInterface {
  "id": string;
  "startDate": Date;
  "endDate": string;
  "pledgeAmount": string;
  "instalmentCount": number;
  "pauseInd": number;
  "devoteeId": string;
  "donationTypeMasterId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  "created-on": Date;
  "updated-on": Date;
  fkPledgeDevotee2rel: Devotee;
  fkPledgeDonationTypeMaster1rel: DonationTypeMaster;
  constructor(data?: PledgeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pledge`.
   */
  public static getModelName() {
    return "Pledge";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pledge for dynamic purposes.
  **/
  public static factory(data: PledgeInterface): Pledge{
    return new Pledge(data);
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
      name: 'Pledge',
      plural: 'Pledges',
      path: 'Pledges',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
        "startDate": {
          name: 'startDate',
          type: 'Date'
        },
        "endDate": {
          name: 'endDate',
          type: 'string'
        },
        "pledgeAmount": {
          name: 'pledgeAmount',
          type: 'string'
        },
        "instalmentCount": {
          name: 'instalmentCount',
          type: 'number'
        },
        "pauseInd": {
          name: 'pauseInd',
          type: 'number'
        },
        "devoteeId": {
          name: 'devoteeId',
          type: 'string'
        },
        "donationTypeMasterId": {
          name: 'donationTypeMasterId',
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
        fkPledgeDevotee2rel: {
          name: 'fkPledgeDevotee2rel',
          type: 'Devotee',
          model: 'Devotee'
        },
        fkPledgeDonationTypeMaster1rel: {
          name: 'fkPledgeDonationTypeMaster1rel',
          type: 'DonationTypeMaster',
          model: 'DonationTypeMaster'
        },
      }
    }
  }
}
