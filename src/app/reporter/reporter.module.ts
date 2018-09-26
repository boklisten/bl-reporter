import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDownloadComponent } from './report-download/report-download.component';
import { OrderDownloadComponent } from './report-download/order-download/order-download.component';
import { ReporterComponent } from './reporter.component';
import { FormsModule} from '@angular/forms';
import { BlCommonModule } from '../bl-common/bl-common.module';
import { BlConnectModule } from '@wizardcoder/bl-connect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    ReporterComponent
  ],
  exports: [
    ReporterComponent
  ]
})
export class ReporterModule { }
