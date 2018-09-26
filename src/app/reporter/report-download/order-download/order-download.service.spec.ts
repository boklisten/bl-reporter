import { TestBed } from '@angular/core/testing';

import { OrderDownloadService } from './order-download.service';

describe('OrderDownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderDownloadService = TestBed.get(OrderDownloadService);
    expect(service).toBeTruthy();
  });
});
