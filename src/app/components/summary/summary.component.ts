import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent implements OnInit {

  generalData: Array<any> = [];
  serviceData: Array<any> = [];
  userData: Array<any> = [];
  diversityData: Array<any> = [];
  displayedColumns: string[] = ["first_name", "last_name", "title", "email", "phone_no", "role"];
  displayedColumns1: string[] = ["category", "attested_type", "counceil", "certificate_number", "issued_date", "expiray_date", "notes"];
  userColumnHeaders: Array<any> = [
    { key: "first_name", header: "First Name" },
    { key: "last_name", header: "Last Name" },
    { key: "title", header: "Title" },
    { key: "email", header: "Email" },
    { key: "phone_no", header: "Phone No" },
    { key: "role", header: "Role" }
  ];
  diversityColumnHeaders: Array<any> = [
    { key: "category", header: "Category" },
    { key: "attested_type", header: "Attested Type" },
    { key: "counceil", header: "Council" },
    { key: "certificate_number", header: "Certificate Number" },
    { key: "issued_date", header: "Issued Date" },
    { key: "expiray_date", header: "Expiry Date" },
    { key: "notes", header: "Notes" },
  ]
  dataSource: any;
  dataSource1: any;
  @ViewChild('paginator', { static: true }) paginator: MatPaginator;
  @ViewChild('paginator1', { static: true }) paginator1: MatPaginator;

  constructor(private dataService: CommonService) { }

  ngOnInit() {
    this.getGeneralInformationData();
    this.getServiceBLockData();
    this.getUserGridData();
    this.getDiversityData();
  }


  getGeneralInformationData() {
    this.dataService.getData().subscribe(res => {
      this.generalData = res.general;
    }, (error) => {
      console.log(error);
    })
  }

  getServiceBLockData() {
    this.dataService.getData().subscribe(res => {
      this.serviceData = res.service;
    }, (error) => {
      console.log(error);
    })
  }

  getUserGridData() {
    this.dataService.getData().subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res.users);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    }, (error) => {
      console.log(error);
    })
  }

  getDiversityData() {
    this.dataService.getData().subscribe(res => {
      this.dataSource1 = new MatTableDataSource<any>(res.diversity)
      this.dataSource1.paginator = this.paginator1;
    }, (error) => {
      console.log(error);
    })
  }

}

