import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeRoleComponent } from './devotee-role.component';

describe('DevoteeRoleComponent', () => {
  let component: DevoteeRoleComponent;
  let fixture: ComponentFixture<DevoteeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
