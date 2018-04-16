import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeDetailAddComponent } from './devotee-detail-add.component';

describe('DevoteeDetailAddComponent', () => {
  let component: DevoteeDetailAddComponent;
  let fixture: ComponentFixture<DevoteeDetailAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeDetailAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeDetailAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
