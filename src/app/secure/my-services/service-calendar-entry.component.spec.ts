import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCalendarEntryComponent } from './service-calendar-entry.component';

describe('ServiceCalendarEntryComponent', () => {
  let component: ServiceCalendarEntryComponent;
  let fixture: ComponentFixture<ServiceCalendarEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCalendarEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCalendarEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
