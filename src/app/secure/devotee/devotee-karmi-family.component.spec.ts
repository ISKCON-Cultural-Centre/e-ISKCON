import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeKarmiFamilyComponent } from './devotee-karmi-family.component';

describe('DevoteeKarmiFamilyComponent', () => {
  let component: DevoteeKarmiFamilyComponent;
  let fixture: ComponentFixture<DevoteeKarmiFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeKarmiFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeKarmiFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
