import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TierListItem } from '../plain-objects/tier-list-item';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TierListItem) { }

  ngOnInit(): void {
  }

  onCreate() {
    
  }

  onCancel() {
    this.dialogRef.close(this.data);
  }
}
