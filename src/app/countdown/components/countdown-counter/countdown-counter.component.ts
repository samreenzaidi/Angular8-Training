import { Component, OnInit } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-countdown-counter',
  templateUrl: './countdown-counter.component.html',
  styleUrls: ['./countdown-counter.component.scss']
})
export class CountdownCounterComponent implements OnInit {
  startedCount:number;
  pausedCount:number;
  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void {
    this.countdownService.sCount$.subscribe((value)=>{
      value?this.startedCount = value:this.startedCount = 0
    });
    this.countdownService.pCount$.subscribe((value)=>{
      value?this.pausedCount = value:this.pausedCount = 0
    });
  }

}
