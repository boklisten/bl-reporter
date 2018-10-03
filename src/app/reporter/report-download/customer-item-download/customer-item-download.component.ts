import { Component, OnInit, Input } from '@angular/core';
import { CustomerItemDownloadService } from './customer-item-download.service';
import { CustomerItemFilter } from './customerItemFilter'; 
import { CustomerItem } from '@wizardcoder/bl-model';

@Component({
  selector: 'app-customer-item-download',
  templateUrl: './customer-item-download.component.html',
  styleUrls: ['./customer-item-download.component.scss']
})
export class CustomerItemDownloadComponent implements OnInit {
  @Input() currentBranchId: string;
  public currentBranch: boolean;
  public customerItemFilter: CustomerItemFilter;
  public wait: boolean;
  public noCustomerItemsFound: boolean;

  constructor(private customerItemDownloadService: CustomerItemDownloadService) {
    this.wait = false;
    this.noCustomerItemsFound = false;
    this.customerItemFilter = {
      fromDate: new Date(),
      toDate: new Date()
    }
  }

  ngOnInit() {
    this.currentBranch = (typeof this.currentBranchId !== 'undefined');
  }

  public onPeriodChange(period: {fromDate: Date, toDate: Date}) {
    this.customerItemFilter.fromDate = period.fromDate; 
    this.customerItemFilter.toDate = period.toDate;
  }

  public onPrintCustomerItems() {
    if (this.currentBranch && (typeof this.currentBranchId !== 'undefined')) {
      this.customerItemFilter['branchIds'] = [this.currentBranchId];
    }

    this.wait = true;
    this.noCustomerItemsFound = false;

    this.customerItemDownloadService.getCustomerItemsByFilter(this.customerItemFilter).then((filteredCustomerItems: CustomerItem[]) => {
      this.customerItemDownloadService.printCustomerItemsToExcelFile(filteredCustomerItems, 'customerItems');
      this.wait = false;
    }).catch((err) => {
      this.wait = false;
      this.noCustomerItemsFound = true;
    })
  }

}
