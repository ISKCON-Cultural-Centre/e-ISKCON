import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInstrumentPaymentComponent } from './fund-instrument-payment.component';

describe('FundInstrumentPaymentComponent', () => {
  let component: FundInstrumentPaymentComponent;
  let fixture: ComponentFixture<FundInstrumentPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInstrumentPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInstrumentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
