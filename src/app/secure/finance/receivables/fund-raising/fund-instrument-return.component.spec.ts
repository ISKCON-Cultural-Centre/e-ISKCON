import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInstrumentReturnComponent } from './fund-instrument-return.component';

describe('FundInstrumentReturnComponent', () => {
  let component: FundInstrumentReturnComponent;
  let fixture: ComponentFixture<FundInstrumentReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInstrumentReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInstrumentReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
