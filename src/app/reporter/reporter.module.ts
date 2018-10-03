import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDownloadComponent } from './report-download/report-download.component';
import { OrderDownloadComponent } from './report-download/order-download/order-download.component';
import { ReporterComponent } from './reporter.component';
import { FormsModule} from '@angular/forms';
import { BlCommonModule } from '../bl-common/bl-common.module';
import { BlConnectModule } from '@wizardcoder/bl-connect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymentDownloadComponent } from './report-download/payment-download/payment-download.component';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faToggleOn, faToggleOff, faCircleNotch, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { CustomerItemDownloadComponent } from './report-download/customer-item-download/customer-item-download.component';

library.add(faLocationArrow, faToggleOn, faToggleOff, faCircleNotch, faFileExcel);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlCommonModule,
    BlConnectModule,
    FontAwesomeModule
  ],
  declarations: [
    ReportDownloadComponent, 
    OrderDownloadComponent, 
    ReporterComponent, PaymentDownloadComponent, CustomerItemDownloadComponent
  ],
  exports: [
    ReporterComponent
  ]
})
export class ReporterModule { }
