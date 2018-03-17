import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeServiceInterestComponent } from './devotee-service-interest.component';

describe('DevoteeServiceInterestComponent', () => {
  let component: DevoteeServiceInterestComponent;
  let fixture: ComponentFixture<DevoteeServiceInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeServiceInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeServiceInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
