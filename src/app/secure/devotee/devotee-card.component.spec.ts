import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeCardComponent } from './devotee-card.component';

describe('DevoteeCardComponent', () => {
  let component: DevoteeCardComponent;
  let fixture: ComponentFixture<DevoteeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
