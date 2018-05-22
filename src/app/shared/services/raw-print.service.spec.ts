import { TestBed, inject } from '@angular/core/testing';

import { RawPrintService } from './raw-print.service';

describe('RawPrintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RawPrintService]
    });
  });

  it('should be created', inject([RawPrintService], (service: RawPrintService) => {
    expect(service).toBeTruthy();
  }));
});
