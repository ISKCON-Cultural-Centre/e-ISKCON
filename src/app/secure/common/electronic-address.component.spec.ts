import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicAddressComponent } from './electronic-address.component';

describe('ElectronicAddressComponent', () => {
  let component: ElectronicAddressComponent;
  let fixture: ComponentFixture<ElectronicAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
