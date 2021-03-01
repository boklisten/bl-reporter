import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BlCommonUpdateButtonComponent } from "./bl-common-update-button.component";
import { Component, Input } from "@angular/core";

@Component({ selector: "fa-icon", template: "" })
class FaIconStub {
  @Input() icon;
  @Input() spin;
}

describe("BlCommonUpdateButtonComponent", () => {
  let component: BlCommonUpdateButtonComponent;
  let fixture: ComponentFixture<BlCommonUpdateButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlCommonUpdateButtonComponent, FaIconStub],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlCommonUpdateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
