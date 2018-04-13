import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeQuickAddComponent } from './devotee-quick-add.component';

describe('DevoteeQuickAddComponent', () => {
  let component: DevoteeQuickAddComponent;
  let fixture: ComponentFixture<DevoteeQuickAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeQuickAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeQuickAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
