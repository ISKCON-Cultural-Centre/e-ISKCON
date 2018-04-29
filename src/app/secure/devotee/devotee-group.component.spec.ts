import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeGroupComponent } from './devotee-group.component';

describe('DevoteeGroupComponent', () => {
  let component: DevoteeGroupComponent;
  let fixture: ComponentFixture<DevoteeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
