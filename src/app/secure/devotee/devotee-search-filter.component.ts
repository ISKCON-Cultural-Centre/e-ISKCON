import { Component, ViewChild, OnInit, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject, BehaviorSubject, Subscription, merge, fromEvent } from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { MatDialog, MatChipInputEvent, MatAutocompleteSelectedEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {  difference, union } from 'set-manipulator';


import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress, SpiritualLevelMaster, SpiritualLevelMasterApi,
  } from '../..//shared/sdk';
import { AuthService, NotificationService } from '../../shared/services';
import { DevoteeSearchFilterShareService } from './devotee-search-filter-share-service';

@Component({
  selector: 'app-devotee-search-filter',
  templateUrl: './devotee-search-filter.component.html',
  styleUrls: ['./devotee-search-filter.component.css']
})
export class DevoteeSearchFilterComponent implements OnInit, AfterViewInit, OnDestroy  {
  devoteeId: String;
  devotee: Devotee;

  nameSearchTerm$ = new Subject<string>();
  assignedCircles = [];
  remainingCircles = [];
  allCircles = [];

  assignedGenders = [];
  remainingGenders = [];
  allGenders = [{id: 'M', name: 'Prabhujis'}, {id: 'F', name: 'Mathajis'}];

  assignedLanguages = [];
  remainingLanguages = [];
  allLanguages = [];

  allAshramas = [];
  assignedAshramas = [];
  remainingAshramas = [];

  allProfessions = [];
  assignedProfessions = [];
  remainingProfessions = [];

  allShikshas = [];
  assignedShikshas = [];
  remainingShikshas = [];

  filter1 = [];
  filter2 = [];
  filter3 = [];
  filter4 = [];
  filter5 = [];
  filter6 = [];
  combinedFilters = '';
  loopBackFilter: LoopBackFilter = {};

  
  removable = true;
  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();
  six$ = new Subscription();
  seven$ = new Subscription();
  eight$ = new Subscription();
  nine$ = new Subscription();
  ten$ = new Subscription();
  eleven$ = new Subscription();


  filterCondition = new Subject<any>();

  @ViewChild('input') search: ElementRef;

  devoteeFilterForm: FormGroup;


  constructor(
    private circleApi: CircleApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private professionMasterApi: ProfessionMasterApi,
    private spiritualLevelMasterApi: SpiritualLevelMasterApi,
    private authService: AuthService,
    private devoteeApi: DevoteeApi,
    private devoteeSearchFilterShareService: DevoteeSearchFilterShareService
  ) { }


  ngOnInit() {
     this.seven$ = this.filterCondition
    .subscribe(
      filter => {
        this.buildAllFilters();
        this.notifyFilterChange(this.combinedFilters);
      }
    ); 

    this.one$ =
    this.circleApi.find<Circle>()
    .subscribe(
      circles => {
        this.allCircles = circles;
        this.remainingCircles = difference(this.allCircles, this.assignedCircles, (object) => object.id);
      }
    );

    this.remainingGenders = difference(this.allGenders, this.assignedGenders, (object) => object.id);

    this.two$ =
      this.languageApi.find<Language>()
      .subscribe(languages => {
        this.allLanguages = languages;
        this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
      }
    );


    this.four$ = this.asramaMasterApi.find<AsramaMaster>()
    .subscribe(
      asramas => {
        this.allAshramas = asramas;
        this.remainingAshramas = difference(this.allAshramas, this.assignedAshramas, (object) => object.id);
      }
    );

    this.five$ = this.professionMasterApi.find<ProfessionMaster>()
    .subscribe(
      professions => {
        this.allProfessions = professions;
        this.remainingProfessions = difference(this.allProfessions, this.assignedProfessions, (object) => object.id);        
      }
    );

    this.six$ = this.spiritualLevelMasterApi.find<SpiritualLevelMaster>()
    .subscribe(
      shikshas => {
        this.allShikshas = shikshas;
        this.remainingShikshas = difference(this.allShikshas, this.assignedShikshas, (object) => object.id);           
      }
    );
  }


  ngAfterViewInit() {


    this.ten$ = fromEvent(this.search.nativeElement,'keyup')
          .pipe(
              debounceTime(150),
              distinctUntilChanged(),
              tap(() => {
                  this.buildAllFilters();
                  this.notifyFilterChange(this.combinedFilters);
              })
          )
          .subscribe();
  }


  notifyFilterChange(event: String) {
    this.devoteeSearchFilterShareService.filterChanged(event);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

  onSelectionChanged1(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedCircles.push(new Circle(value));
    this.remainingCircles = difference(this.allCircles, this.assignedCircles, (object) => object.id);
    this.buildFilter1();
  }

  removeCircle(circle: Circle): void {
    let index = this.assignedCircles.indexOf(circle);
      if (index >= 0) {
        this.assignedCircles.splice(index, 1);
      }
      this.remainingCircles = difference(this.allCircles, this.assignedCircles, (object) => object.id);
      this.buildFilter1();
  }


  onSelectionChanged2(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedGenders.push(value);
    this.remainingGenders = difference(this.allGenders, this.assignedGenders, (object) => object.id);
    this.buildFilter2();
  }  

  removeGender(gender): void {
    let index = this.assignedGenders.indexOf(gender);
      if (index >= 0) {
        this.assignedGenders.splice(index, 1);
      }
      this.remainingGenders = difference(this.allGenders, this.assignedGenders, (object) => object.id);
      this.buildFilter2();      
  }

  onSelectionChanged3(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedLanguages.push(new Language(value));
    this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
    this.buildFilter3();
  }

  removeLanguage(language: Language): void {
    let index = this.assignedLanguages.indexOf(language);
      if (index >= 0) {
        this.assignedLanguages.splice(index, 1);
      }
      this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
      this.buildFilter3();
  }

  onSelectionChanged4(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedAshramas.push(new AsramaMaster(value));
    this.remainingAshramas = difference(this.allAshramas, this.assignedAshramas, (object) => object.id);
    this.buildFilter4();
  }

  removeAshrama(ashrama: AsramaMaster): void {
    let index = this.assignedAshramas.indexOf(ashrama);
      if (index >= 0) {
        this.assignedAshramas.splice(index, 1);
      }
      this.remainingAshramas = difference(this.allAshramas, this.assignedAshramas, (object) => object.id);
      this.buildFilter4();
  }

  onSelectionChanged5(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedProfessions.push(new ProfessionMaster(value));
    this.remainingProfessions = difference(this.allProfessions, this.assignedProfessions, (object) => object.id);
    this.buildFilter5();
  }

  removeProfession(profession: ProfessionMaster): void {
    let index = this.assignedProfessions.indexOf(profession);
      if (index >= 0) {
        this.assignedProfessions.splice(index, 1);
      }
      this.remainingProfessions = difference(this.allProfessions, this.assignedProfessions, (object) => object.id);
      this.buildFilter5();
  }  

  onSelectionChanged6(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.assignedShikshas.push(new SpiritualLevelMaster(value));
    this.remainingShikshas = difference(this.allShikshas, this.assignedShikshas, (object) => object.id);
    this.buildFilter6();
  }

  removeShiksha(language: Language): void {
    let index = this.assignedShikshas.indexOf(language);
      if (index >= 0) {
        this.assignedShikshas.splice(index, 1);
      }
      this.remainingShikshas = difference(this.allShikshas, this.assignedShikshas, (object) => object.id);
      this.buildFilter6();
  }

  
  buildFilter1(){
    this.filter1 = this.assignedCircles.map(function (circle) {
      return  circle.id;
    });
    this.filterCondition.next(this.filter1.toString());
  }

  buildFilter2(){
    this.filter2 = this.assignedGenders.map(function (gender) {
      return gender.id;
    });
    this.filterCondition.next(this.filter2.toString());
  }

  buildFilter3(){
    this.filter3 = this.assignedLanguages.map(function (language) {
      return { languageId: language.id };
    });
    this.filterCondition.next(this.filter3.toString());
  }

  buildFilter4(){
    this.filter4 = this.assignedAshramas.map(function (ashrama) {
      return ashrama.id;
    });
    this.filterCondition.next(this.filter4.toString());
  }

  buildFilter5(){
    this.filter5 = this.assignedProfessions.map(function (profession) {
      return profession.professionId;
    });
    this.filterCondition.next(this.filter5.toString());
  }

  buildFilter6(){
    this.filter6 = this.assignedShikshas.map(function (shiksha) {
      return shiksha.id;
    });
    this.filterCondition.next(this.filter6.toString());
  }



  buildAllFilters()
  {

    this.combinedFilters = 
    '{ "and": ['

    + ((this.search.nativeElement.value.length > 0) ? 
      '{"or": [{"legalName": {"like": "%' + 
      this.search.nativeElement.value + '%"}}, {"spiritualName": {"like": "%' + 
      this.search.nativeElement.value + '%"}}, {"mobileNo": {"like": "%' + 
      this.search.nativeElement.value + '%"}}]}' : '')

    + (((this.filter1.length || this.filter2.length || this.filter3.length || this.filter4.length || this.filter5.length 
      || this.filter6.length ) && (this.search.nativeElement.value.length )) ? ',' : '')

    + ((this.filter1.length > 0 ) ? '{"circleId": {"inq":' + JSON.stringify(this.filter1) + '}}' : '')
    + (((this.filter2.length || this.filter3.length || this.filter4.length || this.filter5.length || this.filter6.length )  &&
      (this.filter1.length )) ? ',' : '')

    + ((this.filter2.length > 0 ) ? '{"gender": {"inq":' + JSON.stringify(this.filter2) + '}}' : '')
    + ((this.filter2.length && (this.filter3.length || this.filter4.length || this.filter5.length || this.filter6.length)) ? ',' : '')

    + ((this.filter3.length > 0 ) ? '{"language": {"inq":' + JSON.stringify(this.filter3) + '}}' : '')
    + ((this.filter3.length && (this.filter4.length || this.filter5.length || this.filter6.length)) ? ',' : '')

    + ((this.filter4.length > 0 ) ? '{"asramaMasterId": {"inq":' + JSON.stringify(this.filter4) + '}}' : '')
    + ((this.filter4.length && (this.filter5.length || this.filter6.length)) ? ',' : '')

    + ((this.filter5.length > 0 ) ? '{"professionId": {"inq":' + JSON.stringify(this.filter5) + '}}' : '')
    + (((this.filter5.length) && (this.filter1.length || this.filter2.length || this.filter3.length || this.filter5.length ) && 
      this.filter6.length ) ? ',' : '')

    + ((this.filter6.length > 0 ) ? '{"shikshaLevel": {"inq":' + JSON.stringify(this.filter6) + '}}' : '')

    + '] }';

   // console.log(this.combinedFilters);

    this.loopBackFilter.where = JSON.parse(this.combinedFilters);

  }

  displayFn(profession?: ProfessionMaster): string | undefined {
    return profession ? profession.professionName : '';
  }  

   ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
    this.five$.unsubscribe();
    this.six$.unsubscribe();
    this.seven$.unsubscribe();
    this.eight$.unsubscribe();
    this.nine$.unsubscribe();
    this.ten$.unsubscribe();
   }

}
