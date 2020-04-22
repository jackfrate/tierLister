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

  @ViewChild('urlForm') urlForm: MatInput;
  @ViewChild('nameForm') nameForm: MatInput;

  constructor(public dialogRef: MatDialogRef<NewItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TierListItem[]
  ) {
    this.tierItem = { url: '', name: '' };
  }

  ngOnInit(): void {
  }

  makeTierItem() {
    let cachedItem: TierListItem;
    if (this.tierItem.url === '' && this.tierItem.name === '') {
      return;
    }
    else {
      // need to cache for it to work, otherwise we get an empty item
      cachedItem = {
        url: this.tierItem.url,
        name: this.tierItem.name
      }
      this.data.push(cachedItem);
    }
    // clear it for cleanliness
    this.tierItem.url = '';
    this.tierItem.name = '';
    // incase we want to wrap this function
    return cachedItem;
  }

  onCreateButton() {
    // make item and get cached item
    const cachedItem = this.makeTierItem();
    // focus correct field
    if (cachedItem.url !== '') {
      this.urlForm.focus();
    }
    if (cachedItem.name !== '') {
      this.nameForm.focus();
    }
  }

  onButtonCancel() {
    this.dialogRef.close();
  }
}
