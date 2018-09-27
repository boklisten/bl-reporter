import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { OrderDownloadService } from './order-download.service';
import { OrderService, UserDetailService } from '@wizardcoder/bl-connect';
import { ExcelService } from './../../excel/excel.service';
import { Injectable } from '@angular/core';
import { Order } from '@wizardcoder/bl-model';


@Injectable()
class UserDetailStubService {

}

describe('OrderDownloadService', () => {
  let excelServiceSpy: jasmine.SpyObj<ExcelService>;  
  let orderServiceSpy: jasmine.SpyObj<OrderService>;
  let orderDownloadService: OrderDownloadService

  beforeEach(() => {
    const excelSpy = jasmine.createSpyObj('ExcelService', [ 'objectsToExcelFile' ]);
    const orderSpy = jasmine.createSpyObj('OrderService', [ 'getAll' ]);

    TestBed.configureTestingModule({
      providers: [
        {provide: OrderService, useValue: orderSpy},
        {provide: UserDetailService, useClass: UserDetailStubService},
        {provide: ExcelService, useValue: excelServiceSpy}
      ]
    })
  });

  beforeEach(() => {
    excelServiceSpy = TestBed.get(ExcelService);
    orderServiceSpy = TestBed.get(OrderService);
  });

  
  it('should be created', () => {
    const service: OrderDownloadService = TestBed.get(OrderDownloadService);
    expect(service).toBeTruthy();
  });

  it('should call api with correct query based on filter', (done) => {
    const service: OrderDownloadService = TestBed.get(OrderDownloadService);

    const filter = {
      branchId: 'branch1',
      fromDate: new Date(2000, 0, 1),
      toDate: new Date(2001, 0, 1),
      byCustomer: true
    }

    const orders: Order[] = [
      {id: '1', byCustomer: true}
    ] as Order[];

    orderServiceSpy.getAll.and.returnValue(orders);

    let expectedQuery = '?placed=true';
    expectedQuery += '&branch=branch1';
    expectedQuery += '&creationTime=>010120000000';
    expectedQuery += '&creationTime=<010120010000';
    expectedQuery += '&byCustomer=true';

    service.getOrdersByFilter(filter).then((returnedOrders) => {
      expect(returnedOrders)
        .toBe(orders);
      
      expect(orderServiceSpy.getAll)
        .toHaveBeenCalledWith(expectedQuery)
      done();
    });
  });

  it('should only include orderItems that fits the filter', () => {
    const orders = [
      {
        id: '',
        orderItems: [
          {
            
          }
        ]
      },
      {
        id: '',
        orderItems: [
          {

          }
        ]
      }
    ]
  })
});
