import { TestBed, inject } from '@angular/core/testing';

import { OrganizationChildrenService } from './organization-children.service';

describe('OrganizationTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationChildrenService]
    });
  });

  it('should be created', inject([OrganizationChildrenService], (service: OrganizationChildrenService) => {
    expect(service).toBeTruthy();
  }));
});
