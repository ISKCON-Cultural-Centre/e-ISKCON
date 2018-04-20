import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaSettingComponent } from './agenda-setting.component';

describe('AgendaSettingComponent', () => {
  let component: AgendaSettingComponent;
  let fixture: ComponentFixture<AgendaSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
