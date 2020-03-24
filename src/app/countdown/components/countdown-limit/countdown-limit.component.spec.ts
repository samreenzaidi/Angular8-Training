import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLimitComponent } from './countdown-limit.component';

describe('CountdownLimitComponent', () => {
  let component: CountdownLimitComponent;
  let fixture: ComponentFixture<CountdownLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
