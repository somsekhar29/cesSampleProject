import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Array<any> = [];

  constructor(private dialog: MatDialog, private dataService: CommonService) {

  }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.data = res;
    }, (error) => {
      console.log(error);
    })
  }

  deleteRecord() {
    this.dialog.open(ConfirmationPopupComponent)

  }

}
