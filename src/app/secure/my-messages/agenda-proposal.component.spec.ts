import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaProposalComponent } from './agenda-proposal.component';

describe('AgendaProposalComponent', () => {
  let component: AgendaProposalComponent;
  let fixture: ComponentFixture<AgendaProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
