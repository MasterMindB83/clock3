import { DigitalClockModule } from './digital-clock/digital-clock.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DigitalClockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
