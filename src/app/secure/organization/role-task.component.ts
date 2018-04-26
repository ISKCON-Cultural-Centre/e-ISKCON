import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatListOptionChange, MatSelectionListChange } from '@angular/material';

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
  selectedRole: String;
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
          },
          order: 'name ASC',
        }
      );
    });
  }


  loadRoleTasks(roleId: String) {
    this.selectedRole = roleId;
    this.loopBackFilter.where = {'roleId': roleId};
    this.two$ = this.roleTaskMasterApi.find<RoleTaskMaster>(this.loopBackFilter)
    .subscribe(
      tasks => {
        const rTasks = tasks.map(function (task) {
          return task.taskMasterId;
        });
        this.roleTasks = rTasks;
        this.loadAllTasks();
      }
    );
  }

  taskAssigned<Boolean>(taskId: string) {
    if (this.roleTasks.indexOf(taskId) === -1) {
      return false;
    } else {
      return true;
    }

  }

  optionChanged(selectionListChange: MatListOptionChange){
    if (selectionListChange.selected){
      this.addTask(this.selectedRole, selectionListChange.source.value);
    } else {
      this.removeTask(this.selectedRole, selectionListChange.source.value);
    }
  }

  loadAllTasks() {
    this.allTasks = this.taskMasterApi.find<TaskMaster>(
      {
        order: 'taskName ASC',
      }
    );
/*     .subscribe(
      tasks => {
        this.allTasks = tasks;
        //this.remainingRoles = difference(this.allRoles, this.assignedRoles, (object) => object.id);
      }
    ); */
  }

  addTask(roleId: String, taskId: String): void {
    this.four$ = this.roleTaskMasterApi.create({roleId: roleId, taskMasterId: taskId})
     .subscribe(
       devoteeRole => {
        this.notificationService.notificationSubject.next('Task added successfully');
       }
     );
  }

  removeTask(roleId: String, taskId: String): void {
    this.five$ = this.roleTaskMasterApi.destroyAll({roleId: roleId, taskId: taskId})
    .subscribe(
      devoteeRole => {
        console.log(devoteeRole);
       this.notificationService.notificationSubject.next('Task deleted successfully');
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
