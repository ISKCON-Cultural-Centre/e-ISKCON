import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentRoleComponent } from './department-role.component';

describe('DepartmentRoleComponent', () => {
  let component: DepartmentRoleComponent;
  let fixture: ComponentFixture<DepartmentRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
