import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import * as _ from 'underscore';
import {  difference } from 'set-manipulator';

import {LoopBackFilter} from '../../shared/sdk/models/BaseModels';
import { TaskMaster, ServiceRole  } from '../../shared/sdk/models';
import { TaskMasterApi, RoleTaskMasterApi, ServiceRoleApi, RoleTaskMaster } from '../../shared/sdk';
import { AuthService, DevoteeSearchSelectService, NotificationService } from '../../shared/services';
/**
 * @title Role Mappings
 */
@Component({
  selector: 'app-role-task',
  templateUrl: './role-task.component.html',
  styleUrls: ['./role-task.component.css']
})
export class RoleTaskComponent implements OnInit, OnDestroy {

  one$ = new Subscription();
  two$ = new Subscription();
  three$ = new Subscription();
  four$ = new Subscription();
  five$ = new Subscription();

  roleSearchCtrl: FormControl;
  filteredRoles: Observable<ServiceRole[]> ;
  allTasks: Observable<TaskMaster[]> ;
  loopBackFilter: LoopBackFilter = {};

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  devoteeId: String = null;
  allRoles = [];
  roleTasks = [];
//  allTasks = [];
  remainingRoles = [];
  assignedRoles = [];
  submitted = false;

  constructor(
    private notificationService: NotificationService,
    private taskMasterApi: TaskMasterApi,
    private serviceRoleApi: ServiceRoleApi,
    private roleTaskMasterApi: RoleTaskMasterApi,
    private devoteeSearchSelectService: DevoteeSearchSelectService,
    private fb: FormBuilder
  ) {
    this.roleSearchCtrl = new FormControl();    
  }

 
  ngOnInit() {

    this.one$ = this.roleSearchCtrl.valueChanges
    .debounceTime(400)
    .startWith('' )
    .subscribe(searchTerm => {
      this.filteredRoles = this.serviceRoleApi.find<ServiceRole>(
        {
          where: {
            or: [
              {name: {like: '%' + searchTerm + '%'}}
            ]
          }
        }
      );
    });
  }


  loadRoleTasks(roleId: String) {
    console.log(roleId);
    this.loopBackFilter.where = {'roleId': roleId};
    this.loopBackFilter.include = ['fkRoleTaskMasterTaskMaster1rel'];
    this.loopBackFilter.order = ['roleId ASC'];
    this.two$ = this.roleTaskMasterApi.find<RoleTaskMaster>(this.loopBackFilter)
    .subscribe(
      tasks => {
        const rTasks = tasks.map(function (task) {
          return task.taskMasterId;
        });
        this.roleTasks = rTasks;
        console.log(this.roleTasks);
        this.loadAllTasks();
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
      }
    );
  }

  taskAssigned<Boolean>(taskId: string) {
    console.log(taskId);
    console.log(this.roleTasks);
    console.log(this.roleTasks.indexOf(taskId));
    if (this.roleTasks.indexOf(taskId) === -1) {
      return false;
    } else {
      return true;
    }

  }

  loadAllTasks() {
    this.allTasks = this.taskMasterApi.find<TaskMaster>();
/*     .subscribe(
      tasks => {
        this.allTasks = tasks;
        //this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
      }
    ); */
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.devoteeSearchSelectService.announceMission(event);
  }

  onSubmit() { this.submitted = true; }

  filterRoles(name?: string)  {
    const pattern = new RegExp('.*' + name + '.*', 'i'); /* case-insensitive RegExp search */
    this.serviceRoleApi.find<ServiceRole>({ 'where': {'name': { 'like': 'pattern'} } });
  }

  displayFn(role?: ServiceRole): string | undefined {
    return role ? role.name : undefined;
  }  

  addTask(roleTask: RoleTaskMaster): void {
    this.four$ = this.roleTaskMasterApi.create<RoleTaskMaster>(roleTask)
     .subscribe(
       devoteeRole => {
        this.assignedRoles.push(roleTask);
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
        this.notificationService.notificationSubject.next('Role added successfully');
       }
     );
  }

  removeRole(role: ServiceRole): void {
    this.five$ = this.roleTaskMasterApi.deleteById ({principalId: this.devoteeId, principalType: 'USER', roleId: role.id})
    .subscribe(
      devoteeRole => {
        const index = this.assignedRoles.indexOf(role);
        if (index >= 0) {
          this.assignedRoles.splice(index, 1);
        }
        this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
       this.notificationService.notificationSubject.next('Role deleted successfully');
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
