/* tslint:disable */
import {
  DonationCategoryMaster,
  EventMaster
} from '../index';

declare var Object: any;
export interface EventDonationMasterInterface {
  "eventMasterId": string;
  "donationCategoryMasterId": string;
  "createdOn"?: Date;
  "updatedOn"?: Date;
  "createdBy"?: string;
  "updatedBy"?: string;
  fkEventDonationMasterDonationCategoryMaster1rel?: DonationCategoryMaster;
  fkFestivalDonationMasterFestivalMaster1rel?: EventMaster;
}

export class EventDonationMaster implements EventDonationMasterInterface {
  "eventMasterId": string;
  "donationCategoryMasterId": string;
  "createdOn": Date;
  "updatedOn": Date;
  "createdBy": string;
  "updatedBy": string;
  fkEventDonationMasterDonationCategoryMaster1rel: DonationCategoryMaster;
  fkFestivalDonationMasterFestivalMaster1rel: EventMaster;
  constructor(data?: EventDonationMasterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EventDonationMaster`.
   */
  public static getModelName() {
    return "EventDonationMaster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EventDonationMaster for dynamic purposes.
  **/
  public static factory(data: EventDonationMasterInterface): EventDonationMaster{
    return new EventDonationMaster(data);
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
      name: 'EventDonationMaster',
      plural: 'EventDonationMasters',
      path: 'EventDonationMasters',
      idName: 'eventMasterId',
      properties: {
        "eventMasterId": {
          name: 'eventMasterId',
          type: 'string'
        },
        "donationCategoryMasterId": {
          name: 'donationCategoryMasterId',
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
        fkEventDonationMasterDonationCategoryMaster1rel: {
          name: 'fkEventDonationMasterDonationCategoryMaster1rel',
          type: 'DonationCategoryMaster',
          model: 'DonationCategoryMaster',
          relationType: 'belongsTo',
                  keyFrom: 'donationCategoryMasterId',
          keyTo: 'id'
        },
        fkFestivalDonationMasterFestivalMaster1rel: {
          name: 'fkFestivalDonationMasterFestivalMaster1rel',
          type: 'EventMaster',
          model: 'EventMaster',
          relationType: 'belongsTo',
                  keyFrom: 'eventMasterId',
          keyTo: 'id'
        },
      }
    }
  }
}
