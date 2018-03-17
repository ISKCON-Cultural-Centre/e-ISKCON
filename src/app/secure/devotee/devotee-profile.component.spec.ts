import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeProfileComponent } from './devotee-profile.component';

describe('DevoteeProfileComponent', () => {
  let component: DevoteeProfileComponent;
  let fixture: ComponentFixture<DevoteeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
