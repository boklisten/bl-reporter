import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlcDeadlineComponent } from './blc-deadline.component';

describe('BlcDeadlineComponent', () => {
  let component: BlcDeadlineComponent;
  let fixture: ComponentFixture<BlcDeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlcDeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlcDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
