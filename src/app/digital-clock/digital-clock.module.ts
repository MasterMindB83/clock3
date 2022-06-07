import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitComponent } from './digit/digit.component';
import { DigitalClockComponent } from './digital-clock.component';
import { SeparatorComponent } from './separator/separator.component';



@NgModule({
  declarations: [
    DigitComponent,
    DigitalClockComponent,
    SeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DigitalClockComponent]
})
export class DigitalClockModule { }
