import { TestBed } from '@angular/core/testing';

import { OrderDownloadService } from './order-download.service';
import { OrderService, UserDetailService } from '@wizardcoder/bl-connect';
import { ExcelService } from './../../excel/excel.service';
import { Injectable } from '@angular/core';

@Injectable()
class OrderStubService {

}


@Injectable()
class UserDetailStubService {

}


@Injectable()
class ExcelStubService {

}

describe('OrderDownloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: OrderService, useClass: OrderStubService},
      {provide: UserDetailService, useClass: UserDetailStubService},
      {provide: ExcelService, useClass: ExcelStubService}
    ]
  }));

  it('should be created', () => {
    const service: OrderDownloadService = TestBed.get(OrderDownloadService);
    expect(service).toBeTruthy();
  });
});
