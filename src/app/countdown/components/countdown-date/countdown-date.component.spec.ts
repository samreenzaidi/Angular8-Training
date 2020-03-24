import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDateComponent } from './countdown-date.component';

describe('CountdownDateComponent', () => {
  let component: CountdownDateComponent;
  let fixture: ComponentFixture<CountdownDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
