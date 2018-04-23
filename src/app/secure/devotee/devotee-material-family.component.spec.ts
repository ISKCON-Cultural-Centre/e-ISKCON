import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeMaterialFamilyComponent } from './devotee-material-family.component';

describe('DevoteeMaterialFamilyComponent', () => {
  let component: DevoteeMaterialFamilyComponent;
  let fixture: ComponentFixture<DevoteeMaterialFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeMaterialFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeMaterialFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
