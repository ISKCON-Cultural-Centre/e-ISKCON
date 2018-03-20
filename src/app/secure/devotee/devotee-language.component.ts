import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatChipInputEvent, MatTableDataSource, MatCheckboxChange, MatSelectChange, MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import {  difference } from 'set-manipulator';

import { Language, DevoteeLanguage } from '../../shared/sdk/models'
import { LanguageApi, DevoteeLanguageApi } from '../../shared/sdk';
import { NotificationService } from '../../shared/services';
import { Subscription } from 'rxjs/Subscription';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';


@Component({
  selector: 'app-devotee-language',
  templateUrl: './devotee-language.component.html',
  styleUrls: ['./devotee-language.component.css']
})
export class DevoteeLanguageComponent implements OnInit, OnDestroy {
  @Input() devoteeId: Observable<String>;

  displayedColumns = ['language', 'read', 'write', 'speak', 'delete'];

  currentDevoteeId: string = null;
  dataSource = new MatTableDataSource<DevoteeLanguage>();

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  model = {name: 'test'};

  allLanguages = [];
  assignedLanguages = [];
  remainingLanguages = [];
  selectedLanguages: DevoteeLanguage[] = [];

  constructor(
    private notificationService: NotificationService,
    private devoteeLanguageApi: DevoteeLanguageApi,
    private languageApi: LanguageApi,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.one$ = this.devoteeId
    .subscribe(
      devoteeId => {
        this.currentDevoteeId = devoteeId.toString();
        this.loadDevoteeLanguages(this.currentDevoteeId);
      }
    );
  }

  loadAllLanguages() {
    this.two$ =  this.languageApi.find<LanguageApi>()
    .subscribe(
      allLanguages => 
      {
        this.allLanguages =  allLanguages;
        this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
      }
    );
  }

  loadDevoteeLanguages(devoteeId: String) {
    this.three$ =  this.devoteeLanguageApi.find<DevoteeLanguage>(
      { 
        where: {devoteeId: devoteeId},
        include: {
          relation: 'fkTable1Language1rel'
        }
      }
    )
    .subscribe(
      assignedLanguages => {
       this.assignedLanguages = assignedLanguages.map((devoteeLanguage) => devoteeLanguage.fkTable1Language1rel);
       // this.dataSource.data = this.assignedLanguages;
        this.dataSource.data = assignedLanguages;
        this.loadAllLanguages();
      }
    );
  }

  displayFn(language?: Language): string | undefined {
    return language ? language.language : '';
  }

  addLanguage(event: MatSelectChange) {
    this.devoteeLanguageApi.create({devoteeId: this.currentDevoteeId, languageId: event.value.id,
      readInd: 0, writeInd: 0, speakInd: 0})
      .subscribe(
      devoteeLanguage => {
        this.assignedLanguages.push(new Language(event.value));
        this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
        this.notificationService.notificationSubject.next('Language added successfully');
        this.loadDevoteeLanguages(this.currentDevoteeId);
      }
    )
  }
 

  deleteLanguage(devoteeLanguage: DevoteeLanguage): void {
    this.four$ =  this.devoteeLanguageApi.destroyAll(devoteeLanguage)
    .subscribe(
      devoteeSkill => {
        let index = this.assignedLanguages.indexOf(devoteeLanguage);
        if (index >= 0) {
          this.assignedLanguages.splice(index, 1);
        }
        this.remainingLanguages = difference(this.allLanguages, this.assignedLanguages, (object) => object.id);
        this.notificationService.notificationSubject.next('Language removed successfully');
      }
    );
  }

  updateDevoteeLanguageRead(devoteeLanguage: DevoteeLanguage, event$: MatCheckboxChange): void {
    console.log(devoteeLanguage);
      this.devoteeLanguageApi.patchAttributes(
          devoteeLanguage.id,
        {
          readInd: event$.checked
        }
      )
      .subscribe(
        updateStatus => {
          this.notificationService.notificationSubject.next('Language updated successfully');
        }
      );
     }

     updateDevoteeLanguageWrite(devoteeLanguage: DevoteeLanguage, event$: MatCheckboxChange): void {
      console.log(devoteeLanguage);
        this.devoteeLanguageApi.patchAttributes(
            devoteeLanguage.id,
          {
            writeInd: event$.checked
          }
        )
        .subscribe(
          updateStatus => {
            this.notificationService.notificationSubject.next('Language updated successfully');
          }
        );
       }

       updateDevoteeLanguageSpeak(devoteeLanguage: DevoteeLanguage, event$: MatCheckboxChange): void {
        console.log(devoteeLanguage);
          this.devoteeLanguageApi.patchAttributes(
              devoteeLanguage.id,
            {
              speakInd: event$.checked
            }
          )
          .subscribe(
            updateStatus => {
              this.notificationService.notificationSubject.next('Language updated successfully');
            }
          );
         }

  openDialog(devoteeLanguage: DevoteeLanguage) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the language ' + devoteeLanguage.fkTable1Language1rel.language
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteLanguage(devoteeLanguage);
      } else { }
    });
  }

  ngOnDestroy(){
    this.one$.unsubscribe();
    this.two$.unsubscribe();
    this.three$.unsubscribe();
    this.four$.unsubscribe();
   }

}
