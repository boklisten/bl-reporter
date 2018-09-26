import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDownloadComponent } from './report-download/report-download.component';
import { OrderDownloadComponent } from './report-download/order-download/order-download.component';
import { ReporterComponent } from './reporter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReportDownloadComponent, 
    OrderDownloadComponent, 
    ReporterComponent
  ],
  exports: [
    ReporterComponent
  ]
})
export class ReporterModule { }
