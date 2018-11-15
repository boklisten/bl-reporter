import { Injectable } from '@angular/core';
import { UserDetailService } from '@wizardcoder/bl-connect';
import { UserDetail } from '@wizardcoder/bl-model';
import { ExcelService } from '../../excel/excel.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailDownloadService {

  constructor(private userDetailService: UserDetailService,
              private excelService: ExcelService) {
  }

  public async getUserDetails(): Promise<UserDetail[]> {
    return this.userDetailService.get();
  }
  
  public printUserDetailsToExcelFile(userDetails: UserDetail[], fileName: string): boolean {
    const excelObjs = this.userdetailsToExcelObjs(userDetails);
    this.excelService.objectsToExcelFile(excelObjs, fileName);
    return true;
  }

  private userdetailsToExcelObjs(userDetails: UserDetail[]): any[] {
    const excelObjs = [];
    for (const userDetail of userDetails) {
      excelObjs.push(this.userDetailToExcelObj(userDetail));
    }
    return excelObjs;
  }

  private userDetailToExcelObj(userDetail: UserDetail): any {
    return {
      id: userDetail.id,
      email: userDetail.email,
      name: userDetail.name,
      phone: userDetail.phone,
      address: userDetail.address,
      postCity: userDetail.postCity,
      postCode: userDetail.postCode,
      dob: userDetail.dob,
      branchId: userDetail.branch,
      creationTime: userDetail.creationTime,
      pivot: 1 // used for excel purposes
    }
  }
}
