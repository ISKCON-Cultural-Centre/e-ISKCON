import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupEntryComponent } from './lookup-entry.component';

describe('LookupEntryComponent', () => {
  let component: LookupEntryComponent;
  let fixture: ComponentFixture<LookupEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
