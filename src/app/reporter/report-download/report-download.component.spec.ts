import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDownloadComponent } from './report-download.component';
import { Component } from '@angular/core';

@Component({selector: 'app-order-download', template: ''})
class OrderDownloadStubComponent {

}

@Component({selector: 'app-payment-download', template: ''})
class PaymentDownloadStubComponent {

}

describe('ReportDownloadComponent', () => {
  let component: ReportDownloadComponent;
  let fixture: ComponentFixture<ReportDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReportDownloadComponent,
        OrderDownloadStubComponent,
        PaymentDownloadStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
