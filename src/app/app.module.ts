import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReporterModule } from './reporter/reporter.module';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faLocationArrow, faToggleOn, faToggleOff, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationArrow, faToggleOn, faToggleOff, faCircleNotch);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReporterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
