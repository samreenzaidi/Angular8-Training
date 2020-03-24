import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownCounterComponent } from './countdown-counter.component';

describe('CountdownCounterComponent', () => {
  let component: CountdownCounterComponent;
  let fixture: ComponentFixture<CountdownCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
