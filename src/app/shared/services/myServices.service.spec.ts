import { TestBed, inject } from '@angular/core/testing';

import { MyServicesService } from './myServices.service';

describe('export class MyServicesService {  ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyServicesService]
    });
  });

  it('should be created', inject([MyServicesService], (service: MyServicesService) => {
    expect(service).toBeTruthy();
  }));
});
