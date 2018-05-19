import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInstrumentIssueComponent } from './fund-instrument-issue.component';

describe('FundInstrumentIssueComponent', () => {
  let component: FundInstrumentIssueComponent;
  let fixture: ComponentFixture<FundInstrumentIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInstrumentIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInstrumentIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
