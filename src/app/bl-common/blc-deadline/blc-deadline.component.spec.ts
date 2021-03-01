import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BlcDeadlineComponent } from "./blc-deadline.component";

describe("BlcDeadlineComponent", () => {
  let component: BlcDeadlineComponent;
  let fixture: ComponentFixture<BlcDeadlineComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlcDeadlineComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlcDeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
