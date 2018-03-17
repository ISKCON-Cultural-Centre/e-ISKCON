import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeSearchComponent } from './devotee-search.component';

describe('DevoteeSearchComponent', () => {
  let component: DevoteeSearchComponent;
  let fixture: ComponentFixture<DevoteeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
