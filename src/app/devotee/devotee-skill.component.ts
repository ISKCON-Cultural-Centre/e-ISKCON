import { Component,Input, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import * as _ from 'underscore';

import { Skill, DevoteeSkill  } from '../shared/sdk/models';
import { SkillApi, DevoteeSkillApi } from '../../../src/app/shared/sdk';

@Component({
  selector: 'app-devotee-skill',
  templateUrl: './devotee-skill.component.html',
  styleUrls: ['./devotee-skill.component.css']
})
export class DevoteeSkillComponent implements OnInit {
  @Input() devoteeId: String;

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  
  availableSkills: Skill[] = [];
  assignedSkills: Skill[] = [];
  selectedSkills: String[] = [];

  constructor(
    private devoteeSkillApi: DevoteeSkillApi,
    private skillApi: SkillApi
  ) { }

  ngOnInit() {
    this.loadSkills();
    this.loadDevoteeSkills();


  }

  loadSkills() {
    this.skillApi.find<Skill>()
    .subscribe(
      devoteeSkills => {
        console.log(devoteeSkills);
       // this.availableSkills = devoteeSkills;
      }
    );
  }

  loadDevoteeSkills() {
    this.devoteeSkillApi.find(
      {
        where: {devoteeId: this.devoteeId},
        include: {
          relation: 'fkDevoteeSkillSkill1rel', 
        }
      }
    )
    .subscribe(
      devoteeSkills => {
        console.log(devoteeSkills);
       // this.assignedSkills = devoteeSkills;
      }
    );
  }

  add(event: MatChipInputEvent){
    this.selectedSkills.push(event.value);
  }

  addSkill(skill: Skill): void {
     const index = this.availableSkills.indexOf(skill);
     this.assignedSkills.push(skill);

    if (index >= 0) {
      this.availableSkills.splice(index, 1);
    }

  }

  removeSkill(skill: Skill): void {
    const index = this.assignedSkills.indexOf(skill);

    if (index >= 0) {
      this.assignedSkills.splice(index, 1);
    }

    this.availableSkills.push(skill);
    this.availableSkills = _.uniq(this.availableSkills);
  }


}
