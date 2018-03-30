import { Component, ViewChild, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {merge} from "rxjs/observable/merge";
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import {debounceTime, distinctUntilChanged, startWith, tap, delay,switchMap, map} from 'rxjs/operators';
import { Http } from '@angular/http';
import { MatDialog, MatChipInputEvent, MatAutocompleteSelectedEvent, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {  difference, union } from 'set-manipulator';


import {LoopBackFilter} from '../../shared/sdk/models/BaseModels'
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';
import {
  SDKToken, DevoteeApi, GothraMasterApi,
  NakshatraMasterApi, CircleApi, Devotee, Circle,
  GothraMaster, NakshatraMaster, Language, LanguageApi, 
  AsramaMaster, AsramaMasterApi, 
  ProfessionMaster, ProfessionMasterApi, PhysicalAddress, SpiritualLevelMaster, SpiritualLevelMasterApi,
  } from '../..//shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../../shared/services';
import { PhysicalAddressComponent } from '../common/physical-address.component';
import { PhysicalAddressApi } from '../../shared/sdk/services/index';
import { DevoteesDataSource } from './devotees-data-source';
import { DevoteesListService } from './devotees-list-service';


@Component({
  selector: 'app-devotee-filter',
  templateUrl: './devotee-filter.component.html',
  styleUrls: ['./devotee-filter.component.css']
})
export class DevoteeFilterComponent implements OnInit, AfterViewInit, OnDestroy {

  /***TBD */
  baseUrl = 'https://api.cdnjs.com/libraries';
  queryUrl = '?search=';
/***TBD */
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


  filterCondition = new Subject<any>();

  dataSource = new DevoteesDataSource(this.devoteesListService);
  displayedColumns = ['legalName', 'spiritualName', 'circle'];
  filteredDevoteesCount = new BehaviorSubject<number>(0);
  public filteredDevoteesCount$ = this.filteredDevoteesCount.asObservable();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  currentDevoteeId = new Subject<String>();
  currentDevoteeId$ = this.currentDevoteeId.asObservable();
  submitted = false;
  devoteeFilterForm: FormGroup;


  constructor(
    private circleApi: CircleApi,
    private languageApi: LanguageApi,
    private asramaMasterApi: AsramaMasterApi,
    private professionMasterApi: ProfessionMasterApi,
    private spiritualLevelMasterApi: SpiritualLevelMasterApi,
    private authService: AuthService,
    private devoteeApi: DevoteeApi,
    private devoteesListService: DevoteesListService,
    private fb: FormBuilder,
    private http: Http) {
    this.createForm();
  }

  /*** create a form 
   * initialize the form - DONE
   * build the html template - 
   * build WHERE conditions from the form values
   * emit event with the WHERE condition
   * devotee-list component consumes the WHERE and emits event with devotee id
   * devotee-detail component display all relevant data of devotee as a CARD
   *
   * 
   * 
  */


  ngOnInit() {
   

    this.loopBackFilter.include = ['fkDevoteeLanguage1rel', 'fkDevoteeProfessionMaster1rel', 'fkDevoteeCircle1rel'];
    this.loopBackFilter.order = ['legalName ASC', 'spiritualName ASC'];
    this.devoteeApi.count(this.combinedFilters)
    .subscribe(
      count => {
        this.filteredDevoteesCount.next(count.count);
        //this.dataSource = new DevoteesDataSource(this.devoteesListService);
        console.log('inside filter comp');
        this.dataSource.loadDevotees(this.loopBackFilter, 0, 10);
        this.paginator.pageIndex = 0;   
      }
    );
  //  this.filteredDevoteesCount.next(this.devoteeApi.count(this.combinedFilters));   
  
    //this.loopBackFilter.limit = 10;
    //this.loopBackFilter.fields = ['legalName', 'spiritualName', 'fkDevoteeCircle1rel.circleName'];
    //limit?: any;
    //order?: any;
    //skip?: any;
    //offset?: any;

     this.seven$ = this.filterCondition
    .subscribe(
      filter => {
        this.buildAllFilters();
        this.loopBackFilter.where = JSON.parse(this.combinedFilters);
        this.devoteeApi.count(this.combinedFilters)
        .subscribe(
          count => {
            this.filteredDevoteesCount.next(count.count);
            //this.dataSource = new DevoteesDataSource(this.devoteesListService);
            this.dataSource.loadDevotees(this.loopBackFilter, this.paginator.pageIndex, this.paginator.pageSize);       
          }
        );    
        this.paginator.pageIndex = 0;    
              
/*         this.devoteeApi.find<Devotee>(
          this.loopBackFilter
        )
        .subscribe(
          devotees =>
          {
            console.log(devotees);
            this.dataSource.data = devotees;
          }
        ) */
      }
    ); 

    this.nameSearchTerm$
    .subscribe(
      val => console.log(val)
    )


    this.devoteeId ? this.devoteeId = this.devoteeId : this.devoteeId = this.authService.getCurrentUserId();
    this.currentDevoteeId.next(this.devoteeId);
    this.currentDevoteeId.next(this.devoteeId);

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

      // reset the paginator after sorting
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

       merge(this.sort.sortChange, this.paginator.page)
          .pipe(
              tap(() => this.loadDevoteesPage())
          )
          .subscribe();
  }





  loadDevoteesPage() {
      this.dataSource.loadDevotees(
          this.loopBackFilter,
          this.paginator.pageIndex,
          this.paginator.pageSize);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
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

    this.loopBackFilter.where = null;
/*     this.combinedFilters = 
    '{ "or": [' 
    +  '{"circleId": {"inq":' + JSON.stringify(this.filter1) + '}}' + ','
    + '{"gender": {"inq":' + JSON.stringify(this.filter2) + '}}'
    + '] }';     */
    console.log((this.filter2.length + this.filter3.length + this.filter4.length + this.filter5.length + this.filter6.length) );
    this.combinedFilters = 
    '{ "and": [' 
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
    console.log(this.combinedFilters);


/*    {
      or: [
        { and: [{ field1: 'foo' }, { field2: 'bar' }] },
        { field1: 'morefoo' }
      ]
    }     */

  }

  extend(obj, src) {
    Object.keys(src).forEach(function(key) { obj[key] = src[key]; });
    return obj;
}

  createForm() {
    this.devoteeFilterForm = this.fb.group({
      name: null,
      circleId: null,
      gender: null,
      languageId: null,
      asramaMasterId: null,
      professionId: null,
      shikshaLevel: null
    });
  }



  displayFn(profession?: ProfessionMaster): string | undefined {
    return profession ? profession.professionName : '';
  }

 
   reset() {
      this.devoteeFilterForm.reset();
      this.currentDevoteeId.next(null);
      this.devoteeFilterForm.setValue(
        {
          id: null,
          legalName: null,
          circleId: null,
          spiritualName: null,
          gender: null,
          creditLimit: 0,
          email: null,
          gothra: null,
          nakshatra: null,
          governmentUniqueId: null,
          incomeTaxId: null,
          kcAssociationDate: null,
          motherTongueLanguageId: null,
          dateOfBirth: null,
          dayMonthOfBirth: 'a',
          lpmId: null,
          asramaMasterId: null,
          professionId: null,
          physicalAddressId: null,
          mobileNo: null,
          landlineNo: null
        }
      );
   }
 

   ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
    this.five$.unsubscribe();
    this.six$.unsubscribe();
    this.seven$.unsubscribe();
   }
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }


}
