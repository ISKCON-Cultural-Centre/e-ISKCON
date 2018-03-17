import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeSkillComponent } from './devotee-skill.component';

describe('DevoteeSkillComponent', () => {
  let component: DevoteeSkillComponent;
  let fixture: ComponentFixture<DevoteeSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
