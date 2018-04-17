import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import {  difference } from 'set-manipulator';

import { Skill, DevoteeSkill  } from '../../shared/sdk/models';
import { SkillApi, DevoteeSkillApi } from '../../shared/sdk';
import { NotificationService } from '../../shared/services';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-devotee-skill',
  templateUrl: './devotee-skill.component.html',
  styleUrls: ['./devotee-skill.component.css']
})
export class DevoteeSkillComponent implements OnInit, OnDestroy {
  @Input() devoteeId: String;


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
  
  allSkills = [];
  assignedSkills = [];
  remainingSkills = [];

  constructor(
    private notificationService: NotificationService,
    private devoteeSkillApi: DevoteeSkillApi,
    private skillApi: SkillApi
  ) { }

  ngOnInit() {
    this.loadDevoteeSkills(this.devoteeId);
  }

  loadAllSkills() {
    this.two$ =  this.skillApi.find<Skill>()
    .subscribe(
      allSkills => 
      {
        this.allSkills =  allSkills;
        this.remainingSkills = difference(this.allSkills, this.assignedSkills, (object) => object.id);
      }
    );
  }

  loadDevoteeSkills(devoteeId: String) {
    this.three$ =  this.devoteeSkillApi.find<DevoteeSkill>(
      { 
        where: {devoteeId: devoteeId},
        include: {
          relation: 'fkDevoteeSkillSkill1rel'
        }
      }
    )
    .subscribe(
      devoteeSkills => {
        this.assignedSkills = devoteeSkills.map((skill) => skill.fkDevoteeSkillSkill1rel);
        this.loadAllSkills();
      }
    );
  }

  displayFn(skill?: Skill): string | undefined {
    return skill ? skill.skillName : '';
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    let value = event.option.value;
    this.four$ =  this.devoteeSkillApi.create({devoteeId: this.devoteeId, skillId: value.id })
    .subscribe(
      devoteeSkill => {
       this.assignedSkills.push(new Skill(value));
       this.remainingSkills = difference(this.allSkills, this.assignedSkills, (object) => object.id);
       this.notificationService.notificationSubject.next('Skill added successfully');
      }
    );
  }


  remove(skill: Skill): void {
    let index = this.assignedSkills.indexOf(skill);
    this.five$ =  this.devoteeSkillApi.destroyAll({devoteeId: this.devoteeId, skillId: skill.id })
    .subscribe(
      devoteeSkill => {
        let index = this.assignedSkills.indexOf(skill);
        if (index >= 0) {
          this.assignedSkills.splice(index, 1);
        }
        this.remainingSkills = difference(this.allSkills, this.assignedSkills, (object) => object.id);
        this.notificationService.notificationSubject.next('Skill removed successfully');
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
