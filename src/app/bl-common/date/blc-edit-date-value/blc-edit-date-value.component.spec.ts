import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { Pipe } from "@angular/core";

import { BlcEditDateValueComponent } from "./blc-edit-date-value.component";

@Pipe({ name: "blDate" })
class BlDateStubPipe {
  transform() {}
}

describe("BlcEditDateValueComponent", () => {
  let component: BlcEditDateValueComponent;
  let fixture: ComponentFixture<BlcEditDateValueComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlcEditDateValueComponent, BlDateStubPipe],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlcEditDateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
