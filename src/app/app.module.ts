import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReporterModule } from './reporter/reporter.module';

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
