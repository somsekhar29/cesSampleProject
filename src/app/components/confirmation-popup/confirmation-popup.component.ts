import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmationPopupComponent>) { }

  ngOnInit(): void {
  }

  closePopUp() {
    this.dialogRef.close(true);
  }

}
