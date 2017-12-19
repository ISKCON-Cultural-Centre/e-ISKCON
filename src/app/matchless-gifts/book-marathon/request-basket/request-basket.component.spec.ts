import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBasketComponent } from './request-basket.component';

describe('RequestBasketComponent', () => {
  let component: RequestBasketComponent;
  let fixture: ComponentFixture<RequestBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
