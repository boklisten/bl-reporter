import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { BlcPeriodSelectComponent } from "./blc-period-select.component";
import {
  Injectable,
  EventEmitter,
  Component,
  Input,
  Output,
} from "@angular/core";
import { DateService } from "../../date/date.service";
import { FormsModule } from "@angular/forms";
import { NgbButtonsModule } from "@ng-bootstrap/ng-bootstrap";

@Injectable()
class DateStubService {
  public getCurrentDayPeriod(): any {
    return {
      fromDate: new Date(),
      toDate: new Date(),
    };
  }
}

@Component({ selector: "app-blc-edit-date-value", template: "" })
class BlcEditDateValueStubComponent {
  @Input() value;
  @Output() valueChange;

  constructor() {
    this.valueChange = new EventEmitter<any>();
  }
}

describe("BlcPeriodSelectComponent", () => {
  let component: BlcPeriodSelectComponent;
  let fixture: ComponentFixture<BlcPeriodSelectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, NgbButtonsModule],
        declarations: [BlcPeriodSelectComponent, BlcEditDateValueStubComponent],
        providers: [{ provide: DateService, useClass: DateStubService }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BlcPeriodSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
