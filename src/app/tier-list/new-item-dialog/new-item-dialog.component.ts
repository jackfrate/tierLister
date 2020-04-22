import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TierListItem } from '../plain-objects/tier-list-item';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {

  public tierItem: TierListItem;

  constructor(public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TierListItem[]) {
    this.tierItem = { url: null, name: null };
  }

  ngOnInit(): void {
  }

  makeTierItem() {
    if (this.tierItem.url === null && this.tierItem.name === null) {
      return;
    }
    else {
      this.data.push(this.tierItem);
    }
  }

  onButtonCancel() {
    this.dialogRef.close();
  }
}
