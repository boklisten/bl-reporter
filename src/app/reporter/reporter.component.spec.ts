import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ReporterComponent } from './reporter.component';

@Component({selector: 'app-order-download', template: ''})
class OrderDownloadStubComponent {

}

describe('ReporterComponent', () => {
  let component: ReporterComponent;
  let fixture: ComponentFixture<ReporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReporterComponent,
        OrderDownloadStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
