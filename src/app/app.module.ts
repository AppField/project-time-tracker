import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { TimerowComponent } from './components/timerow/timerow.component';
import { MaterialHoverDirective } from './shared/material.hover.directive';
import { SummaryComponent } from './components/summary/summary.component';
import { DayselectComponent } from './components/dayselect/dayselect.component';
import { MonthPipe } from './components/dayselect/month.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    TimerowComponent,
    MaterialHoverDirective,
    SummaryComponent,
    DayselectComponent,
    MonthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
