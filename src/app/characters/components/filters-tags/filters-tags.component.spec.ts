import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersTagsComponent } from './filters-tags.component';

describe('FiltersTagsComponent', () => {
  let component: FiltersTagsComponent;
  let fixture: ComponentFixture<FiltersTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
