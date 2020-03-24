import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CountdownService } from '../../services/countdown.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-countdown-limit',
  templateUrl: './countdown-limit.component.html',
  styleUrls: ['./countdown-limit.component.scss']
})
export class CountdownLimitComponent implements OnInit {
  isStarted: boolean = false;
  form: FormGroup;
  timeLeft: number;
  interval: any;
  time: any;
  @ViewChild('paused') elem: ElementRef;
  startedCount: number=0;
  pausedCount: number=0;
  constructor(private countdownService: CountdownService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'limit': new FormControl()
    })
  }


  ngOnInit(): void {
    this.form.get("limit").valueChanges.subscribe((v) => this.timeLeft = v);
  }

  toggleCountdown(isStarted) {
    this.isStarted = !isStarted;
    if (this.isStarted) {
      if (this.timeLeft > 0) {
        this.startedCount += 1;
        this.countdownService.sCount = this.startedCount;
        this.time = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530') + "_Started";
      }
      this.interval = setInterval(() => {
        this.countdownService.timer = this.timeLeft;
        if (this.timeLeft > 0) {
          this.timeLeft = this.timeLeft - 1;
        } else {
          clearInterval(this.interval);
        }
      }, 1000)
    } else {
      if (this.timeLeft > 0) {
        this.pausedCount += 1;
        this.countdownService.pCount = this.pausedCount;
        this.time = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530') + '_Paused';
        this.elem.nativeElement.insertAdjacentHTML('beforeend', '<li>Paused at ' + this.timeLeft + '</li>');
        clearInterval(this.interval);
      }
    }
    this.countdownService.time = this.time;
  }

  reset() {
    this.isStarted = false;
    this.timeLeft = 0;
    this.time = '';
    this.startedCount = 0;
    this.pausedCount = 0;
    this.countdownService.sCount = this.startedCount;
    this.countdownService.pCount = this.pausedCount;
    this.countdownService.time = this.time;
    clearInterval(this.interval);
    this.elem.nativeElement.innerHTML = "";
    this.form.get("limit").setValue(this.timeLeft);
    this.countdownService.timer = this.timeLeft;
  }

}
