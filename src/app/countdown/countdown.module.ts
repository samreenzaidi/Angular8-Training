import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownLimitComponent } from './components/countdown-limit/countdown-limit.component';
import { CountdownDateComponent } from './components/countdown-date/countdown-date.component';
import { CountdownCounterComponent } from './components/countdown-counter/countdown-counter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CountdownHomeComponent } from './components/countdown-home/countdown-home.component';



@NgModule({
  declarations: [
    CountdownTimerComponent,
    CountdownLimitComponent,
    CountdownDateComponent,
    CountdownCounterComponent,
    CountdownHomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CountdownTimerComponent,
    CountdownLimitComponent,
    CountdownDateComponent,
    CountdownCounterComponent,
    CountdownHomeComponent
  ]
})
export class CountdownModule { }
