import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private _timer: number;
  private _time: any;
  private _sCount: number;
  private _pCount: number;
  public timer$: BehaviorSubject<number> = new BehaviorSubject(null);
  public time$: BehaviorSubject<any> = new BehaviorSubject(null);
  public sCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  public pCount$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  get timer() {
    return this._timer;
  }

  set timer(value: number) {
    this._timer = value;
    this.timer$.next(this._timer);
  }

  get time() {
    return this._time;
  }

  set time(value: any) {
    this._time = value;
    this.time$.next(this._time);
  }

  get sCount() {
    return this._sCount;
  }

  set sCount(value: any) {
    this._sCount = value;
    this.sCount$.next(this._sCount);
  }

  get pCount() {
    return this._sCount;
  }

  set pCount(value: any) {
    this._pCount = value;
    this.pCount$.next(this._pCount);
  }

}
