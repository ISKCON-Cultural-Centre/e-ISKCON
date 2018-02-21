import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeListComponent } from './devotee-list.component';

describe('DevoteeListComponent', () => {
  let component: DevoteeListComponent;
  let fixture: ComponentFixture<DevoteeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
