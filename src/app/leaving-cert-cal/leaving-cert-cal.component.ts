import {Component, OnInit} from '@angular/core';
import {ConnectionService} from '../connection.service';

@Component({
  selector: 'app-leaving-cert-cal',
  templateUrl: './leaving-cert-cal.component.html',
  styleUrls: ['./leaving-cert-cal.component.css']
})
export class LeavingCertCalComponent implements OnInit {
  pageConfig: any;
  appList: any = [];

  constructor(private connectionService: ConnectionService) {
    this.pageConfig = {
      id: 'appPage',
      itemsPerPage: 2,
      currentPage: 1,
    };
  }

  onPageChange(event){
    console.log(event);
    this.pageConfig.currentPage = event;
  }

  ngOnInit(): void {
     this.connectionService.getApps().subscribe(resp => {
      console.log("Getting App Data: " + resp)
      this.appList = resp;
    });
  }
}