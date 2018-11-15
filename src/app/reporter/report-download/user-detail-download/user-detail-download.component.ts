import { Component, OnInit } from '@angular/core';
import { UserDetailDownloadService } from './user-detail-download.service';
import { UserDetail } from '@wizardcoder/bl-model';

@Component({
  selector: 'app-user-detail-download',
  templateUrl: './user-detail-download.component.html',
  styleUrls: ['./user-detail-download.component.scss']
})
export class UserDetailDownloadComponent implements OnInit {
  public wait: boolean;

  constructor(private userDetailDownloadService: UserDetailDownloadService) { }

  ngOnInit() {
    this.wait = false;
  }

  public onPrintUserDetails() {
    this.wait = true;

    this.userDetailDownloadService.getUserDetails().then((userDetails: UserDetail[]) => {
      this.userDetailDownloadService.printUserDetailsToExcelFile(userDetails, 'users'); 
      this.wait = false;
    }).catch(() => {
      this.wait = false;
    })

  }

}
