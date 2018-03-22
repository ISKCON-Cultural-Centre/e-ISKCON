import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeFilterComponent } from './devotee-filter.component';

describe('DevoteeQueryComponent', () => {
  let component: DevoteeFilterComponent;
  let fixture: ComponentFixture<DevoteeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
