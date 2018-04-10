import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeSearchFilterComponent } from './devotee-search-filter.component';

describe('DevoteeSearchFilterComponent', () => {
  let component: DevoteeSearchFilterComponent;
  let fixture: ComponentFixture<DevoteeSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
