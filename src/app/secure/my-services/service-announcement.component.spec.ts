import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAnnouncementComponent } from './service-announcement.component';

describe('ServiceAnnouncementComponent', () => {
  let component: ServiceAnnouncementComponent;
  let fixture: ComponentFixture<ServiceAnnouncementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAnnouncementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
