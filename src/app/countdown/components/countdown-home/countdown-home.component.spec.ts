import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownHomeComponent } from './countdown-home.component';

describe('CountdownHomeComponent', () => {
  let component: CountdownHomeComponent;
  let fixture: ComponentFixture<CountdownHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
