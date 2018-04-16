import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import {  difference } from 'set-manipulator';

import { ServiceArea, DevoteeServiceInterest  } from '../../shared/sdk/models';
import { ServiceAreaApi, DevoteeServiceInterestApi } from '../../shared/sdk';
import { NotificationService } from '../../shared/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-devotee-service-interest',
  templateUrl: './devotee-service-interest.component.html',
  styleUrls: ['./devotee-service-interest.component.css']
})
export class DevoteeServiceInterestComponent implements OnInit, OnDestroy {
  @Input() devoteeId: Observable<String>;
  currentDevoteeId: String = null;

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  model = {name: 'test'};

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  
  allServices = [];
  assignedServices = [];
  remainingServices = [];

  constructor(
    private notificationService: NotificationService,
    private devoteeServiceInterestApi: DevoteeServiceInterestApi,
    private serviceAreaApi: ServiceAreaApi
  ) { }

  ngOnInit() {
    this.one$ = this.devoteeId
    .subscribe(
      devoteeId => {
        this.currentDevoteeId = devoteeId;
        this.loadDevoteeServices(this.currentDevoteeId);
      }
    );
  }

  loadAllServices() {
    this.two$ =  this.serviceAreaApi.find<ServiceArea>()
    .subscribe(
      allServices => 
      {
        //console.log(allServices);
        this.allServices =  allServices;
        this.remainingServices = difference(this.allServices, this.assignedServices, (object) => object.id);
      }
    );
  }

  loadDevoteeServices(devoteeId: String) {
    this.three$ =  this.devoteeServiceInterestApi.find<DevoteeServiceInterest>(
      { 
        where: {devoteeId: devoteeId},
        include: {
          relation: 'fkDevoteeServiceInterestServiceArea1rel'
        }
      }
    )
    .subscribe(
      devoteeServices => {
        this.assignedServices = devoteeServices.map((service) => service.fkDevoteeServiceInterestServiceArea1rel);
        this.loadAllServices();
      }
    );
  }

  displayFn(service?: ServiceArea): string | undefined {
    return service ? service.serviceName : '';
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.four$ =  this.devoteeServiceInterestApi.create({devoteeId: this.currentDevoteeId, serviceAreaId: value.id })
    .subscribe(
      devoteeService => {
       this.assignedServices.push(new ServiceArea(value));
       this.remainingServices = difference(this.allServices, this.assignedServices, (object) => object.id);
       this.notificationService.notificationSubject.next('Service added successfully');
      }
    );
  }


  remove(serviceArea: ServiceArea): void {
    let index = this.assignedServices.indexOf(serviceArea);
    this.five$ =  this.devoteeServiceInterestApi.destroyAll({devoteeId: this.currentDevoteeId, id: serviceArea.id })
    .subscribe(
      devoteeService => {
        let index = this.assignedServices.indexOf(serviceArea);
        if (index >= 0) {
          this.assignedServices.splice(index, 1);
        }
        this.remainingServices = difference(this.allServices, this.assignedServices, (object) => object.id);
        this.notificationService.notificationSubject.next('Service removed successfully');
      }
    );
  }

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
    this.five$.unsubscribe();
   }
}
