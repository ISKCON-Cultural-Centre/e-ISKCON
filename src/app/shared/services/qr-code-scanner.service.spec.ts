import { TestBed, inject } from '@angular/core/testing';

import { QrCodeScannerService } from './qr-code-scanner.service';

describe('QrCodeScannerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QrCodeScannerService]
    });
  });

  it('should be created', inject([QrCodeScannerService], (service: QrCodeScannerService) => {
    expect(service).toBeTruthy();
  }));
});
