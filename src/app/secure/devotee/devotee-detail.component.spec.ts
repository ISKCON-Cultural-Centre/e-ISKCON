import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeDetailComponent } from './devotee-detail.component';

describe('DevoteeDetailComponent', () => {
  let component: DevoteeDetailComponent;
  let fixture: ComponentFixture<DevoteeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
