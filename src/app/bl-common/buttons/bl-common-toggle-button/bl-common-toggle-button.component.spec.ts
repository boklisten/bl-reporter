import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlCommonToggleButtonComponent } from './bl-common-toggle-button.component';
import { Component, Input } from '@angular/core';

@Component({selector: 'fa-icon', template: ''})
class FaIconStub {
  @Input() icon;
}

describe('BlCommonToggleButtonComponent', () => {
  let component: BlCommonToggleButtonComponent;
  let fixture: ComponentFixture<BlCommonToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlCommonToggleButtonComponent,
        FaIconStub
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlCommonToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
