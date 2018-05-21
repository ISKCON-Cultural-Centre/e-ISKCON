import { TestBed, inject } from '@angular/core/testing';

import { QrCodeGeneratorService } from './qr-code-generator.service';

describe('QrCodeGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrCodeGeneratorService]
    });
  });

  it('should be created', inject([QrCodeGeneratorService], (service: QrCodeGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
