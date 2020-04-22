import { Component, OnInit, Inject, ViewChild, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TierListItem } from '../plain-objects/tier-list-item';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-new-item-dialog',
  templateUrl: './new-item-dialog.component.html',
  styleUrls: ['./new-item-dialog.component.scss']
})
export class NewItemDialogComponent implements OnInit {

  public tierItem: TierListItem;

  // @ViewChild('urlForm') urlForm: MatInput;
  // @ViewChild('nameForm') nameForm: MatInput;

  constructor(public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TierListItem[]) {
    this.tierItem = { url: '', name: '' };
  }

  ngOnInit(): void {
  }

  makeTierItem() {
    if (this.tierItem.url === '' && this.tierItem.name === '') {
      return;
    }
    else {
      this.data.push(this.tierItem);
    }
    this.tierItem.url = '';
    this.tierItem.name = '';
  }

  onButtonCancel() {
    this.dialogRef.close();
  }
}
