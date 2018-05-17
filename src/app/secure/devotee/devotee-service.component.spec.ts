import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeServiceComponent } from './devotee-service.component';

describe('DevoteeServiceComponent', () => {
  let component: DevoteeServiceComponent;
  let fixture: ComponentFixture<DevoteeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
