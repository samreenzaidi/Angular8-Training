import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-countdown-date',
  templateUrl: './countdown-date.component.html',
  styleUrls: ['./countdown-date.component.scss']
})
export class CountdownDateComponent implements OnInit {
  time: any;
  @ViewChild('time') elem: ElementRef;
  constructor(private countdownService: CountdownService) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.countdownService.time$.subscribe((value) => {
      value ? this.elem.nativeElement.insertAdjacentHTML('beforeend', '<li> ' + value.split('_')[1] + ' at ' + value.split('_')[0] + '</li>') : this.elem.nativeElement.innerHTML = "";
    })
  }
}
