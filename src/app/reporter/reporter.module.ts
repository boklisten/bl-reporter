import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportDownloadComponent } from './report-download/report-download.component';
import { ReporterComponent } from './reporter.component';
import { FormsModule} from '@angular/forms';
import { BlCommonModule } from '../bl-common/bl-common.module';
import { BlConnectModule } from '@wizardcoder/bl-connect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faLocationArrow, faToggleOn, faToggleOff, faCircleNotch, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { ReportDownloadModule } from './report-download/report-download.module';

library.add(faLocationArrow, faToggleOn, faToggleOff, faCircleNotch, faFileExcel);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BlCommonModule,
    BlConnectModule,
    FontAwesomeModule,
    ReportDownloadModule
  ],
  declarations: [
    ReportDownloadComponent, 
    ReporterComponent 
  ],
  exports: [
    ReporterComponent
  ]
})
export class ReporterModule { }
