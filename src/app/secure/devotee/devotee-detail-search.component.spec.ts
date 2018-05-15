import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeDetailSearchComponent } from './devotee-detail-search.component';

describe('DevoteeQueryComponent', () => {
  let component: DevoteeDetailSearchComponent;
  let fixture: ComponentFixture<DevoteeDetailSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeDetailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
