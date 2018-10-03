import { Injectable } from '@angular/core';
import { CustomerItemFilter } from './customerItemFilter';
import { CustomerItemService } from '@wizardcoder/bl-connect';
import { CustomerItem } from '@wizardcoder/bl-model';
import { DateService } from '../../../bl-common/date/date.service';
import { ExcelService } from '../../excel/excel.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerItemDownloadService {

  constructor(private customerItemService: CustomerItemService,
              private excelService: ExcelService, 
              private dateService: DateService) {
  }

  public async getCustomerItemsByFilter(filter: CustomerItemFilter): Promise<CustomerItem[]> {
    const customerItems = await this.customerItemService.get(this.createQueryByFilter(filter));
    return customerItems;
  }

  public printCustomerItemsToExcelFile(customerItems: CustomerItem[], fileName: string): boolean {
    const excelObjs = this.customerItemsToExcelObjs(customerItems);
    this.excelService.objectsToExcelFile(excelObjs, fileName);
    return true;
  }

  private customerItemsToExcelObjs(customerItems: CustomerItem[]): any[] {
    let excelObjs = [];

    for (let customerItem of customerItems) {
      excelObjs.push(this.customerItemToExcelObj(customerItem));
    }

    return excelObjs;
  }

  private customerItemToExcelObj(customerItem: CustomerItem): any {
    return {
      id: customerItem.id,
      item: customerItem.item,
      customer: customerItem.customer,
      deadline: customerItem.deadline,
      returned: customerItem.returned,
      buyout: customerItem.buyout,
      customerName: customerItem.customerInfo.name,
      customerPhone: customerItem.customerInfo.phone
    }
  }

  private createQueryByFilter(filter: CustomerItemFilter): string {
    let query = '?handout=true';
    
    query += this.getBranchIdsQuery(filter.branchIds);
    query += this.getDateQuery(filter.fromDate, filter.toDate);
    query += this.getReturnedQuery(filter.returned);
    query += this.getBuyoutQuery(filter.buyout);

    return query;
  }

  private getBuyoutQuery(buyout: boolean): string {
    if (typeof buyout === 'undefined') {
      return '';
    }

    return `&buyout=${buyout}`;
  }

  private getReturnedQuery(returned: boolean): string {
    if (typeof returned === 'undefined') {
      return '';
    }

    return `&returned=${returned}`;
  }

  private getDateQuery(fromDate: Date, toDate: Date): string {
    if (typeof fromDate === 'undefined' || typeof toDate === 'undefined') {
      return '';
    }

    return this.dateService.getPeriodQuery(fromDate, toDate);
  }

  private getBranchIdsQuery(branchIds: string[]): string {
    if (typeof branchIds === 'undefined') {
      return '';
    }


    let query = '';
    
    for (let branchId of branchIds) {
      query += `branch=${branchId}`;
    }

    return query;
  }
}
