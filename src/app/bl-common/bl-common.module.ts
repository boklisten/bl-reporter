import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlcPeriodSelectComponent} from './blc-period/blc-period-select/blc-period-select.component';
import { BlcEditDateValueComponent } from './date/blc-edit-date-value/blc-edit-date-value.component';
import { BlDatePipe } from './date/pipes/bl-date.pipe';
import { BlCommonUpdateButtonComponent } from './buttons/bl-common-update-button/bl-common-update-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlCommonToggleButtonComponent } from './buttons/bl-common-toggle-button/bl-common-toggle-button.component';
import { DateService } from './date/date.service';
import { NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';
import { BlcDeadlineComponent } from './blc-deadline/blc-deadline.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    NgbButtonsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BlcPeriodSelectComponent,
    BlcEditDateValueComponent,
    BlDatePipe,
    BlCommonUpdateButtonComponent,
    BlCommonToggleButtonComponent,
    BlcDeadlineComponent
  ],
  exports: [
    BlcPeriodSelectComponent,
    BlCommonUpdateButtonComponent,
    BlCommonToggleButtonComponent
  ],
  providers: [
    DateService
  ]
})
export class BlCommonModule { }
