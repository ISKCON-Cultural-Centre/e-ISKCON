import { Component,Input, OnInit } from '@angular/core';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import * as _ from 'underscore';
import * as __ from 'lodash';

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
  model = {name: 'test'};

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];
  
  availableSkills: Skill[];
  assignedSkills: Skill[];
  selectedSkills = [];

  constructor(
    private devoteeSkillApi: DevoteeSkillApi,
    private skillApi: SkillApi
  ) { }

  ngOnInit() {
    this.loadSkills();
    this.loadDevoteeSkills();

/*     this.devoteeForm.get('gothra').valueChanges
    //.distinctUntilChanged()
    .subscribe(searchTerm => {
      this.filteredGothras = this.gothraMasterApi.find<GothraMaster>(
        { where: { gothra: { like: '%' + searchTerm + '%' } } }
      );
    }); */
  }

  loadSkills() {
    this.skillApi.find<Skill>()
    .subscribe(availableSkills => this.availableSkills =  availableSkills);
  }

  loadDevoteeSkills() {
    this.devoteeSkillApi.find<DevoteeSkill>(
      { 
        where: {devoteeId: this.devoteeId},
        include: {
          relation: 'fkDevoteeSkillSkill1rel'
        }
      }
    )
    .subscribe(
      devoteeSkills => {
        this.assignedSkills = devoteeSkills.map((skill) => skill.fkDevoteeSkillSkill1rel);
        console.log(this.assignedSkills);
      }
    );
  }

  displayFn(skill?: Skill): string | undefined {
    return skill ? skill.skillName : '';
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    //let value = event.option.value;
    this.devoteeSkillApi.create({devoteeId: this.devoteeId, skillId: event.option.value.id })
    .subscribe(
      devoteeSkill => {
        console.log(devoteeSkill);
        this.assignedSkills.push(new Skill(event.option.value));
        let index = this.availableSkills.indexOf(event.option.value);
        console.log(index);
        if (index >= 0) {
          this.availableSkills.splice(index, 1);
        }        
        //this.availableSkills =   _.difference(this.availableSkills, this.assignedSkills);
        let res1 = this.diff(this.availableSkills, this.assignedSkills);
        let res2 = this.diff(this.assignedSkills, this.availableSkills);
        console.log(res1);
        console.log(res2);        
      }
    );
  }

  diff = function(obj1, obj2) {
    return __.reduce(obj1, function(result, value, key) {
      if (__.isPlainObject(value)) {
        result[key] = this.diff(value, obj2[key]);
      } else if (!__.isEqual(value, obj2[key])) {
        result[key] = value;
      }
      return result;
    }, {});
  };
  




  addOnTokenEnd(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;
    console.log('inside add');
    // Add our fruit
    if ((value || '').trim()) {
      this.selectedSkills.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill: Skill): void {
    console.log(this.devoteeId);
    console.log(skill.id);
    this.devoteeSkillApi.destroyAll({devoteeId: this.devoteeId, skillId: skill.id })
    .subscribe(
      devoteeSkill => {
        console.log(devoteeSkill);
        let index = this.assignedSkills.indexOf(skill);
        if (index >= 0) {
          this.assignedSkills.splice(index, 1);
        }
        this.availableSkills.push(skill);
      }

    );


  }

/*   addSkill(skill: Skill): void {
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
  } */


}
