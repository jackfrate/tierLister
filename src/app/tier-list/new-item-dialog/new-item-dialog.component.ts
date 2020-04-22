import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewItemDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
