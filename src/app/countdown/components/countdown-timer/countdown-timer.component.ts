import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  timer: number;

  constructor(private countdownService:CountdownService) { }

  ngOnInit(): void {
    this.countdownService.timer$.subscribe((value)=>{
      value?this.timer = value:this.timer = 0;
    })
  }

}
