import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoteeLanguageComponent } from './devotee-language.component';

describe('DevoteeLanguageComponent', () => {
  let component: DevoteeLanguageComponent;
  let fixture: ComponentFixture<DevoteeLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoteeLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoteeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
