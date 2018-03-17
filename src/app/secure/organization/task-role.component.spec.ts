import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRoleComponent } from './task-role.component';

describe('TaskRoleComponent', () => {
  let component: TaskRoleComponent;
  let fixture: ComponentFixture<TaskRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
