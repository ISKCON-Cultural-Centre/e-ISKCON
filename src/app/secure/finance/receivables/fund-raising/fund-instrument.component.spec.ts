import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInstrumentComponent } from './fund-instrument.component';

describe('FundInstrumentComponent', () => {
  let component: FundInstrumentComponent;
  let fixture: ComponentFixture<FundInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
