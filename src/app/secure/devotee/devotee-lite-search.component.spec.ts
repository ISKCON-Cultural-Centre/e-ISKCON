import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeLiteSearchComponent } from './devotee-lite-search.component';

describe('DevoteeLiteSearchComponent', () => {
  let component: DevoteeLiteSearchComponent;
  let fixture: ComponentFixture<DevoteeLiteSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeLiteSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeLiteSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
