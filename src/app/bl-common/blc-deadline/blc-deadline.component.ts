import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-blc-deadline",
  templateUrl: "./blc-deadline.component.html",
  styleUrls: ["./blc-deadline.component.scss"],
})
export class BlcDeadlineComponent implements OnInit {
  @Output() deadlineChange: EventEmitter<{ fromDate: Date; toDate: Date }>;

  constructor() {}

  ngOnInit() {}
}
