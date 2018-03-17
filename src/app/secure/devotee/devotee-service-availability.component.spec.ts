import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeServiceAvailabilityComponent } from './devotee-service-availability.component';

describe('DevoteeServiceAvailabilityComponent', () => {
  let component: DevoteeServiceAvailabilityComponent;
  let fixture: ComponentFixture<DevoteeServiceAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeServiceAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeServiceAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
