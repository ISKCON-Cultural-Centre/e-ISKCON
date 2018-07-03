import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskMaster, TaskMasterApi } from '../../shared/sdk';
import {  NotificationService} from '../../shared/services';
import { MaterialModule } from '../../material.module';
import { MatPaginator, MatSort, MatTableDataSource, MatCheckboxChange } from '@angular/material';
import {MatDialog} from '@angular/material';
import { Subscription } from 'rxjs';

import { SharedComponentsModule } from '../../shared/components/shared-components.module'
import { InlineEditComponent } from '../../shared/components/inline-edit/inline-edit.component';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-task-master',
  templateUrl: './task-master.component.html',
  styleUrls: ['./task-master.component.css']
})
export class TaskMasterComponent implements OnInit {


  displayedColumns = ['name', 'description', 'route', 'approvalRuleInd', 'delete'];
  add = false; 
  tasks: TaskMaster[] = [];
  dataSource = new MatTableDataSource<TaskMaster>();

  taskForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }  

  constructor(
    private notificationService: NotificationService,
    private taskMasterApi: TaskMasterApi,
    private fb: FormBuilder,
    public dialog: MatDialog) {
      this.createForm();
    }

  ngOnInit() {
    this.loadTasks();
  }

  createForm() {
    this.taskForm = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: ['', Validators.required],
      approvalRulesApplyInd: ['', Validators.required],
      applicationRoute: ['', Validators.required]
    });
  }

  editTaskNameField(editValue: string, el: any) {
    this.taskMasterApi.patchAttributes(el.id, {taskName: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.taskName + '" updated successfully'));
  }

  editTaskDescriptionField(editValue: string, el: any) {
    this.taskMasterApi.patchAttributes(el.id, {taskDescription: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.taskDescription + '" updated successfully'));
  }

  editAplicationRouteField(editValue: string, el: any) {
    this.taskMasterApi.patchAttributes(el.id, {applicationRoute: editValue})
    .subscribe(result => this.notificationService.notificationSubject.next('"' + result.applicationRoute + '" updated successfully'));
  }

  editApprovalRulesApplyInd(event$: MatCheckboxChange, el: any) {
    console.log()
    this.taskMasterApi.patchAttributes(el.id, {approvalRulesApplyInd: event$.checked})
    .subscribe(result => this.notificationService.notificationSubject.next('Approval Rule updated successfully'));
  }  

  displayCreateTask() {
    this.add = true;
  }

  cancel() {
    this.add = false;
  }

  addTask() {
    this.taskMasterApi.create<TaskMaster>(this.taskForm.value)
    .subscribe(result => {
      this.loadTasks();
      this.notificationService.notificationSubject.next('"' + result.taskName + '" created successfully');
      this.add = false;
      this.taskForm.reset();
      }
    );
  }


  deleteTask(taskMaster: TaskMaster) {
    this.taskMasterApi.deleteById(taskMaster.id)
    .subscribe(result => {
      this.loadTasks();
      this.notificationService.notificationSubject.next('Role ' + '"' + taskMaster.taskName + '" deleted successfully');
      }
    );
  }


  loadTasks() {
    this.taskMasterApi.find<TaskMaster>({'order': 'taskName ASC'})
    .subscribe(
      tasks => {
        this.dataSource.data = tasks;
      }
    )
  }


  openDialog(taskMaster: TaskMaster) {
    let dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: 'Delete the department ' + taskMaster.taskName
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteTask(taskMaster);
      } else { }
    });
  }

}

