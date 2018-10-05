import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlCommonModule } from '../../bl-common/bl-common.module';
import { ExcelService } from '../excel/excel.service';

import { PaymentDownloadService } from './payment-download/payment-download.service';
import { PaymentDownloadComponent } from './payment-download/payment-download.component';

import { OrderDownloadService } from './order-download/order-download.service';
import { OrderDownloadComponent } from './order-download/order-download.component';

import { CustomerItemDownloadService } from './customer-item-download/customer-item-download.service';
import { CustomerItemDownloadComponent } from './customer-item-download/customer-item-download.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateService } from '../../bl-common/date/date.service';



@NgModule({
  imports: [
    CommonModule,
    BlCommonModule,
    FontAwesomeModule
  ],
  providers: [
    ExcelService,
    PaymentDownloadService,
    OrderDownloadService,
    CustomerItemDownloadService,
    DateService
  ],
  declarations: [
    PaymentDownloadComponent,
    OrderDownloadComponent,
    CustomerItemDownloadComponent
  ],
  exports: [
    PaymentDownloadComponent,
    OrderDownloadComponent,
    CustomerItemDownloadComponent
  ]
})
export class ReportDownloadModule { }
