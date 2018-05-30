import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeManagementComponent } from './devotee-management.component';

describe('DevoteeManagementComponent', () => {
  let component: DevoteeManagementComponent;
  let fixture: ComponentFixture<DevoteeManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
